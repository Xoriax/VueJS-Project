home-page.vue
<template>
  <div id="content">
    <div class="button-container">
      <div>
        <BaseButton @click="handleAsyncClick" :isDisabled="isButtonDisabled"
          :color="isButtonDisabled ? 'disabled' : 'primary'">BaseButton</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'HomePage',
  components: {
    BaseButton,
  },
  data() {
    return {
      user: null,
      isButtonDisabled: false,
      timer: 2
    };
  },
  methods: {
    handleAsyncClick() {
      this.isButtonDisabled = true;
      const waitTime = this.timer * 1000;
      this.timer++;
      setTimeout(() => {
        this.isButtonDisabled = false;
      }, waitTime);
    },
  }
}
</script>

<style scoped>
#content {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>