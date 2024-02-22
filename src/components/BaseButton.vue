BaseButton.vue
<template>
    <button :class="[color, { 'disabled': isDisabled }]" class="base-button" @mouseenter="isHovered = true"
        @mouseleave="isHovered = false" @focus="isFocused = true" @blur="isFocused = false" :disabled="isDisabled">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    data() {
        return {
            isHovered: false,
            isFocused: false
        };
    },
    props: {
        isDisabled: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'primary'
        }
    }
}
</script>

<style scoped>
.base-button {
    background-color: #3dc45a;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 13px 40px;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    margin: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.base-button:hover .base-button:focus {
    background-color: #6beb71;
    color: black;
}

.base-button.disabled {
    background-color: #b3e9b1;
    cursor: not-allowed;
}

.base-button.warning {
    background-color: orange;
}

.base-button.danger {
    background-color: red;
}
</style>