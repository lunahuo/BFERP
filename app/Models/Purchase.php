<?php

namespace App\Models;

use Carbon\Carbon;

class Purchase extends Model
{
    const PURCHASE_STATUS_NEW = 'new';
    const PURCHASE_STATUS_SECTION = 'section';
    const PURCHASE_STATUS_FINISH = 'finish';

    public static $purchaseStatusMap = [
        self::PURCHASE_STATUS_NEW => '新建',
        self::PURCHASE_STATUS_SECTION => '部分完成',
        self::PURCHASE_STATUS_FINISH => '完成'
    ];

    protected $table = "purchases";

    protected $fillable = [
        'purchase_order_no', 'receiver', 'receiver_address',
        'remark', 'warehouse_id', 'order_no', 'user_id', 'promise_delivery_time',
        'salesman', 'source', 'client_name', 'buyer_nick', 'is_submit', 'is_print',
        'is_check', 'is_change', 'status', 'print_at'
    ];

    //观察者
    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub

        // 监听模型创建事件，在写入数据库之前触发
        static::creating(function($model) {
            // 如果模型的 no 字段为空
            if (!$model->purchase_order_no) {
                // 调用 findAvailableNo 生成订单流水号
                $model->purchase_order_no = static::findAvailableNo();
                // 如果生成失败，则终止创建订单
                if (!$model->purchase_order_no) {
                    return false;
                }
            }
        });

        //字段有修改才会触发
        static::updating(function($model) {
            // 如果模型 is_change 为 0
            if (!$model->is_change) {
                $model->is_change = 1;
            }
        });
    }

    //设置状态
    public function setPurchaseStatus($status)
    {
        $this->purchase_status = $status;
        $this->save();

    }

    /**
     * 提交
     */
    public function input()
    {
        $this->is_submit = 1;
        $this->save();
    }

    /**
     * 审核
     */
    public function check()
    {
        $this->is_check = 1;
        $this->save();
    }

    /**
     * 打印
     */
    public function print()
    {
        $this->print_at = Carbon::now();
        $this->is_print = 1;
        $this->save();
    }

    public static function findAvailableNo()
    {
        // 订单流水号前缀
        //PR:Purchase Request Form 采购申请单,公司内部使用;
        //PO:Purchase Order Form 采购订单,公司对外使用。
        $prefix = 'PO';

        for ($i = 0; $i < 10; $i++) {
            // 随机生成 6 位的数字
            $no = $prefix . date('YmdHis') . str_pad(mt_rand(1, 99999), 5, 0, STR_PAD_LEFT);
            // 判断是否已经存在
            if (!static::query()->where('purchase_order_no', $no)->exists()) {
                return $no;
            }
        }

        return false;
    }


    public function getPurchaseStatusAttribute($value)
    {
        return self::$purchaseStatusMap[$value ? $value : self::PURCHASE_STATUS_NEW];
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function purchaseDetails()
    {
        return $this->hasMany(PurchaseDetail::class, 'purchases_id');
    }

    public function cancelPurchases()
    {
        return $this->hasMany(CancelPurchase::class,'purchases_id');
    }
}
