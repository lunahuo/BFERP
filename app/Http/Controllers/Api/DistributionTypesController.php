<?php

namespace App\Http\Controllers\Api;

use App\Models\DistributionType;
use App\Http\Requests\Api\DistributionTypeRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\DistributionTypeTransformer;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 入库类型资源
 * @Resource("distributiontypes",uri="/api")
 */
class DistributionTypesController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = DistributionTypeTransformer::class;
    const MODEL = DistributionType::class;

    /**
     * 获取所有入库类型
     *
     * @Get("/distributiontypes{?status}")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("status", type="boolean", description="获取的状态", required=false, default="all")
     * })
     * @Response(200, body={
     * "data": {
     *         {
     *              "id": 1,
     *              "name": "配送类型名称",
     *              "status": true,
     *              "created_at": "2018-08-08 18:14:22",
     *              "updated_at": "2018-08-08 18:14:22",
     *         },
     *     },
     *     "meta": {
     *         "pagination": {
     *             "total": 1,
     *             "count": 1,
     *             "per_page": 10,
     *             "current_page": 1,
     *             "total_pages": 1,
     *             "links": {
     *                 "previous": null,
     *                 "next": "{{host}}/api/distributiontypes?page=1"
     *             }
     *         }
     *     }
     * })
     */
    public function index(DistributionTypeRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }


    /**
     * 新增入库类型
     *
     * @Post("/distributiontypes")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("name", description="入库类型名称", required=true),
     *      @Parameter("status",type="boolean", description="状态(0:停用，1:启用)", required=false, default=true)
     * })
     * @Transaction({
     *      @Response(422, body={
     *          "message": "422 Unprocessable Entity",
     *           "errors": {
     *              "name": {
     *                  "入库类型名称必填"
     *              }
     *           },
     *          "status_code": 422,
     *      }),
     *      @Response(201, body={
     *          "id": 1,
     *          "name": "配送类型名称",
     *          "status": true,
     *          "created_at": "2018-08-08 18:14:22",
     *          "updated_at": "2018-08-08 18:14:22",
     *          "meta": {
     *              "status_code": "201"
     *          }
     *      })
     * })
     */
    public function store(DistributionTypeRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    /**
     * 显示单条配送类型
     *
     * @Get("/distributiontypes/:id")
     * @Versions({"v1"})
     * @Transaction({
     *      @Response(404, body={
     *          "message": "No query results for model ",
     *          "status_code": 404,
     *      }),
     *      @Response(200, body={
     *          "id": 1,
     *          "name": "配送类型名称",
     *          "status": true,
     *          "created_at": "2018-08-08 18:14:22",
     *          "updated_at": "2018-08-08 18:14:22",
     *      })
     * })
     */
    public function show($id)
    {
        return $this->traitShow($id, self::MODEL, self::TRANSFORMER);
    }


    /**
     * 修改配送类型
     *
     * @Patch("/distributiontypes/:id")
     * @Versions({"v1"})
     * @Transaction({
     *      @Response(404, body={
     *          "message": "No query results for model ",
     *          "status_code": 404,
     *      }),
     *      @Response(422, body={
     *          "message": "422 Unprocessable Entity",
     *           "errors": {
     *              "name": {
     *                  "配送类型名称必须string类型"
     *               }
     *           },
     *          "status_code": 422
     *      }),
     *      @Response(201, body={
     *          "id": 1,
     *          "name": "配送类型名称",
     *          "status": true,
     *          "created_at": "2018-08-08 18:14:22",
     *          "updated_at": "2018-08-08 18:14:22",
     *      })
     * })
     */
    public function update(DistributionTypeRequest $request, DistributionType $distributiontype)
    {
        return $this->traitUpdate($request, $distributiontype, self::TRANSFORMER);
    }

    /**
     * 删除配送类型
     *
     * @Delete("/distributiontypes/:id")
     * @Versions({"v1"})
     * @Transaction({
     *      @Response(404, body={
     *          "message": "No query results for model ",
     *          "status_code": 404,
     *      }),
     *      @Response(204, body={})
     * })
     */
    public function destroy(DistributionType $distributiontype)
    {
        return $this->traitDestroy($distributiontype);
    }

    /**
     * 删除一组配送类型
     *
     * @Delete("/distributiontypes")
     * @Versions({"v1"})
     * @Parameters({
     * @Parameter("ids", description="配送类型id组 格式: 1,2,3,4 ", required=true)
     * })
     * @Transaction({
     *      @Response(500, body={
     *          "message": "删除错误",
     *          "code": 500,
     *          "status_code": 500,
     *      }),
     *      @Response(422, body={
     *          "message": "422 Unprocessable Entity",
     *           "errors": {
     *              "ids": {
     *                  "id组必填"
     *              }
     *           },
     *          "status_code": 422,
     *      }),
     *      @Response(204, body={})
     * })
     */
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    /**
     * 更改一组配送类型状态
     *
     * @PUT("/distributiontypes/editstatus")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("ids", description="配送类型id组 格式: 1,2,3,4 ", required=true),
     *      @Parameter("status",type="boolean", description="状态(0:停用，1:启用)", required=true),
     * })
     * @Transaction({
     *      @Response(500, body={
     *          "message": "更改错误",
     *          "code": 500,
     *          "status_code": 500,
     *      }),
     *      @Response(422, body={
     *          "message": "422 Unprocessable Entity",
     *           "errors": {
     *              "ids": {
     *                  "id组必填"
     *              },
     *              "status": {
     *                  "状态必填"
     *              }
     *           },
     *          "status_code": 422,
     *      }),
     *      @Response(204, body={})
     * })
     */
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
