<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Contracts\Repository\PostRepositoryContract;
use Illuminate\Contracts\Routing\ResponseFactory as Response;

/**
 * Usually I would make a service for each of the actions defined in this controller
 * to keep the controller thin, and I find single action services to be much more testable
 * (for an example of a single action service check out SignUpService.php)
 */
class PostController
{
    private $response;
    private $repository;
    
    public function __construct(
        Response $response,
        PostRepositoryContract $repository
    )
    {
        $this->response = $response;
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /**
         * We set skip presenter by default to work directly with the
         * repository instead of the transformed result in the code, then
         * when it comes to displaying an API result to the user, we apply
         * the presenter. More on presenters and transformers here:
         * https://github.com/andersao/l5-repository#presenters 
         */
        try {
            $posts = $this->repository->skipPresenter(false)->all();

            return $this->response->success($posts);
        } catch (ValidationException $e) {
            return $this->response->validateError($e->errors());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $postData = $request->only(['title', 'body']);

        $createdPost = $this->repository
            ->skipPresenter(false)
            ->create($postData);

        return $this->response->success($createdPost);
    }

    /**
     * Display the specified resource.
     *
     * @param string $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $id = $this->repository->decodeSlug($slug);
        $post = $this->repository->skipPresenter(false)->find($id);

        return $this->response->success($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string $slug
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        try {
            $data = $request->only(['title', 'body']);
            $id = $this->repository->decodeSlug($slug);

            $updatedPost = $this->repository->skipPresenter(false)->update($data, $id);
    
            return $this->response->success($updatedPost);
        } catch (ValidationException $e) {
            return $this->response->validateError($e->errors());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deletedPost = $this->repository->skipPresenter(false)->delete($id);

        return $this->response->success(['message' => 'post deleted']);
    }
}
