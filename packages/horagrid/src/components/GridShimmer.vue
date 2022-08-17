<script lang="ts" setup>
</script>

<template>
  <div class="hora-shimmer">
    <svg>
      <defs>
        <clipPath
          id="hora-shimmer-clippath"
          clipPathUnits="objectBoundingBox">
          <path
            transform="scale(0.00142857, 0.01666667)"
            d="M0 6C0 2.68629 2.68629 0 6 0H154C157.314 0 160 2.68629 160 6V19C160 22.3137 157.314 25 154 25H6C2.6863 25 0 22.3137 0 19V6Z" />
          <path
            transform="scale(0.00142857, 0.01666667)"
            d="M180 6C180 2.68629 182.686 0 186 0H334C337.314 0 340 2.68629 340 6V19C340 22.3137 337.314 25 334 25H186C182.686 25 180 22.3137 180 19V6Z" />
          <path
            transform="scale(0.00142857, 0.01666667)"
            d="M360 6C360 2.68629 362.686 0 366 0H514C517.314 0 520 2.68629 520 6V19C520 22.3137 517.314 25 514 25H366C362.686 25 360 22.3137 360 19V6Z" />
          <path
            transform="scale(0.00142857, 0.01666667)"
            d="M540 6C540 2.68629 542.686 0 546 0H694C697.314 0 700 2.68629 700 6V19C700 22.3137 697.314 25 694 25H546C542.686 25 540 22.3137 540 19V6Z" />
          <path
            transform="scale(0.00142857, 0.01666667)"
            d="M0 41C0 37.6863 2.68629 35 6 35H154C157.314 35 160 37.6863 160 41V54C160 57.3137 157.314 60 154 60H6C2.6863 60 0 57.3137 0 54V41Z" />
          <path
            transform="scale(0.00142857, 0.01666667)"
            d="M180 41C180 37.6863 182.686 35 186 35H334C337.314 35 340 37.6863 340 41V54C340 57.3137 337.314 60 334 60H186C182.686 60 180 57.3137 180 54V41Z" />
          <path
            transform="scale(0.00142857, 0.01666667)"
            d="M360 41C360 37.6863 362.686 35 366 35H514C517.314 35 520 37.6863 520 41V54C520 57.3137 517.314 60 514 60H366C362.686 60 360 57.3137 360 54V41Z" />
          <path
            transform="scale(0.00142857, 0.01666667)"
            d="M540 41C540 37.6863 542.686 35 546 35H694C697.314 35 700 37.6863 700 41V54C700 57.3137 697.314 60 694 60H546C542.686 60 540 57.3137 540 54V41Z" />
        </clipPath>
      </defs>
    </svg>
    <div class="hora-shimmer-box"></div>
  </div>
</template>

<style lang="postcss">
.hora-shimmer {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background: var(--hr-color-white);

  svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
  }
}

.hora-shimmer-box {
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, var(--hr-color-gray-light-3) 0%, var(--hr-color-gray-light-5) 20%, var(--hr-color-gray-light-3) 100%);
  background-size: cover;
  clip-path: url(#hora-shimmer-clippath);
  animation: 2s hora-shimmer-animation infinite linear;
}

@keyframes hora-shimmer-animation {
  0% { background-position: 0vw 0; }
  100% {  background-position: 70vw 0; }
}
</style>