<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccountingTypesTable extends Migration
{
    /**
     * Run the migrations.
     * 记账类型表
     * @return void
     */
    public function up()
    {
        Schema::create('accounting_types', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->default('')->comment('记账类型名称');
            $table->tinyInteger('status')->default(0)->comment('状态：0=停用，1=启用');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounting_types');
    }
}
