<template>
  <div>
    <!-- 测试按钮组件 -->
    <div class="row">
      <ti-button>普通按钮</ti-button>
      <ti-button type="primary">primary按钮</ti-button>
      <ti-button type="success">success按钮</ti-button>
      <ti-button type="info">info按钮</ti-button>
      <ti-button type="danger">danger按钮</ti-button>
      <ti-button type="warning">warning按钮</ti-button>
    </div>
    <!-- 测试 plain 属性 -->
    <div class="row">
      <ti-button plain>普通按钮</ti-button>
      <ti-button plain type="primary">primary按钮</ti-button>
      <ti-button plain type="success">success按钮</ti-button>
      <ti-button plain type="info">info按钮</ti-button>
      <ti-button plain type="danger">danger按钮</ti-button>
      <ti-button plain type="warning">warning按钮</ti-button>
    </div>
    <!-- 测试 round 属性 -->
    <div class="row">
      <ti-button round>按钮</ti-button>
      <ti-button round type="primary">primary按钮</ti-button>
      <ti-button round type="success">success按钮</ti-button>
      <ti-button plain round type="info">info按钮</ti-button>
      <ti-button plain round type="danger">danger按钮</ti-button>
      <ti-button plain round type="warning">warning按钮</ti-button>
    </div>
    <!-- 测试 diabled 属性 -->
    <div class="row">
      <ti-button disabled>按钮</ti-button>
      <ti-button disabled type="primary">primary按钮</ti-button>
      <ti-button disabled type="success">success按钮</ti-button>
      <ti-button disabled round type="info">info按钮</ti-button>
      <ti-button disabled round type="danger">danger按钮</ti-button>
      <ti-button disabled round type="warning">warning按钮</ti-button>
    </div>
    <!-- 测试 circle 属性 -->
    <div class="row">
      <ti-button round circle>好</ti-button>
      <ti-button round circle type="primary">好</ti-button>
      <ti-button round circle type="success">学</ti-button>
      <ti-button plain round circle type="info">习</ti-button>
      <ti-button plain round circle type="danger">前</ti-button>
      <ti-button plain round circle type="warning">端</ti-button>
    </div>
    <!-- 测试图标 -->
    <div class="row">
      <ti-button icon="milk-tea"></ti-button>
      <ti-button type="primary" icon="camera">照相机</ti-button>
      <ti-button type="success" icon="wind-power" circle></ti-button>
      <ti-button type="info" icon="orange"></ti-button>
      <ti-button type="danger" icon="goblet"></ti-button>
      <ti-button type="warning" icon="cloudy"></ti-button>
      <ti-button type="info" plain icon="milk-tea">奶茶</ti-button>
    </div>
    <!-- 测试事件 -->
    <div class="row">
      <ti-button type="primary" plain @click="handleClick('tiui', $event)">click</ti-button>
    </div>
  </div>
</template>

<script setup lang="ts">
function handleClick(name: string, event: Event){
  alert(name);
  console.log(event);
}
</script>

<style scoped lang="scss">
.row {
  margin-bottom: 20px;
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
}
</style>
