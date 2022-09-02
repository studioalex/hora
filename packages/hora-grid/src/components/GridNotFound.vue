<script lang="ts" setup>
  import { toRefs } from 'vue'
  // import { properties } from '../features/initGrid'

  // const { isLoading, recordCount } = properties

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    }
  })

  const { isVisible } = toRefs(props)
</script>

<template>
  <div
    v-if="isVisible"
    class="hora-notfound"
    :class="{ 'hora-notfound--visible': isVisible}">
    <slot>
      <div class="hora-notfound__center-view">
        <div class="hora-notfound__message-wrapper">
          <svg
            viewBox="0 0 500 500"
            fill="none"
            class="hora-clip--nodata"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M500 382.4H0V382.6H500V382.4Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              d="M85.6 398.5H52.5V398.7H85.6V398.5Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              d="M179.8 401.2H135.3V401.4H179.8V401.2Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              d="M157 389.2H86.6001V389.4H157V389.2Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              d="M449.9 390.9H437.2V391.1H449.9V390.9Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              d="M428.3 390.9H391.5V391.1H428.3V390.9Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              d="M308.3 395.1H277.2V395.3H308.3V395.1Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              d="M237 337.8H43.9C40.8 337.8 38.2 335.2 38.2 332.1V60.7C38.2 57.6 40.8 55 43.9 55H237C240.1 55 242.7 57.6 242.7 60.7V332.1C242.7 335.2 240.2 337.8 237 337.8ZM43.9 55.2C40.9 55.2 38.4 57.6 38.4 60.7V332.1C38.4 335.1 40.8 337.6 43.9 337.6H237C240 337.6 242.5 335.2 242.5 332.1V60.7C242.5 57.7 240.1 55.2 237 55.2H43.9Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              d="M453.3 337.8H260.2C257.1 337.8 254.5 335.2 254.5 332.1V60.7C254.5 57.6 257.1 55 260.2 55H453.3C456.4 55 459 57.6 459 60.7V332.1C459 335.2 456.5 337.8 453.3 337.8ZM260.2 55.2C257.2 55.2 254.7 57.6 254.7 60.7V332.1C254.7 335.1 257.1 337.6 260.2 337.6H453.3C456.3 337.6 458.8 335.2 458.8 332.1V60.7C458.8 57.7 456.4 55.2 453.3 55.2H260.2Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              d="M317.592 283.027L317.592 68.7274L54.1923 68.7274L54.1923 283.027L317.592 283.027Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              d="M319.108 283.012L319.108 68.7123H317.508L317.508 283.012H319.108Z"
              fill="var(--HORA--clip-nodata--border-bottom-all-color)" />
            <path
              d="M67.0654 270.02L304.565 270.02V81.7198L67.0654 81.7198L67.0654 270.02Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              d="M175.3 270H207.1L154 81.7H122.1L175.3 270Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M149.7 270H168.1L115 81.7H96.5999L149.7 270Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M251.9 270H259.5L206.4 81.7H198.7L251.9 270Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M425.9 374.2H147.9C143.9 374.2 140.7 370.9 140.8 366.8L147.4 168C147.5 164 151 160.6 155 160.6H433C437 160.6 440.2 163.9 440.1 168L433.5 366.8C433.4 370.9 429.9 374.2 425.9 374.2Z"
              fill="var(--HORA--clip-nodata--border-bottom-all-color)" />
            <g opacity="0.6">
              <path
                d="M423.6 374.2H145.6C141.6 374.2 138.4 370.9 138.5 366.8L145 168C145.1 164 148.6 160.6 152.6 160.6H430.6C434.6 160.6 437.8 163.9 437.7 168L431.1 366.8C431.1 370.9 427.7 374.2 423.6 374.2Z"
                fill="var(--HORA--clip-nodata--border-bottom-color)" />
            </g>
            <path
              d="M420 373.8H84.1999C80.6999 373.8 77.6999 375.8 76.2999 378.8C75.4999 380.5 76.6999 382.4 78.5999 382.4H425.6C427.5 382.4 428.7 380.5 427.9 378.8C426.6 375.9 423.5 373.8 420 373.8Z"
              fill="var(--HORA--clip-nodata--border-bottom-all-color)" />
            <path
              opacity="0.6"
              d="M84.1999 373.8H352.2C355.7 373.8 358.7 375.8 360.1 378.8C360.9 380.5 359.7 382.4 357.8 382.4H78.5999C76.6999 382.4 75.4999 380.5 76.2999 378.8C77.6999 375.9 80.6999 373.8 84.1999 373.8Z"
              fill="var(--HORA--clip-nodata--border-bottom-color)" />
            <path
              opacity="0.3"
              d="M244.4 379.3H174.7C173 379.3 171.6 380.7 171.6 382.4H247.6C247.5 380.7 246.1 379.3 244.4 379.3Z"
              fill="var(--HORA--clip-nodata--border-bottom-all-color)" />
            <path
              opacity="0.9"
              d="M145.1 359.6L151.2 175.2C151.3 173.6 152.6 172.3 154.2 172.3H428.4C430 172.3 431.2 173.6 431.2 175.2L425 359.6C424.9 361.2 423.6 362.5 422 362.5H147.9C146.3 362.5 145.1 361.2 145.1 359.6Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M152.4 351.8L158 182.9C158.1 181 159.7 179.4 161.6 179.4H420.3C422.3 179.4 424 181.1 423.9 183.1L418.3 352C418.2 353.9 416.6 355.5 414.7 355.5H156C153.9 355.5 152.3 353.8 152.4 351.8Z"
              fill="var(--HORA--clip-nodata--display-bottom-color)" />
            <path
              d="M363.4 362.5H408.9L356.5 172.4H311.1L363.4 362.5Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M334.5 362.5H350.8L298.5 172.4H282.1L334.5 362.5Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M241.4 362.5H257.8L205.4 172.4H189L241.4 362.5Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              opacity="0.4"
              d="M293.6 281.2C293.6 282.4 292.6 283.4 291.4 283.4C290.2 283.4 289.3 282.4 289.3 281.2C289.3 280 290.3 279 291.5 279C292.7 279 293.7 280 293.6 281.2Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M250 427.5C357.088 427.5 443.9 422.441 443.9 416.2C443.9 409.959 357.088 404.9 250 404.9C142.912 404.9 56.1001 409.959 56.1001 416.2C56.1001 422.441 142.912 427.5 250 427.5Z"
              fill="var(--HORA--clip-nodata--display-top-all-color)" />
            <path
              opacity="0.5"
              d="M158 287.8C114.2 244 114.2 173.1 158 129.3C201.8 85.5 272.7 85.5 316.5 129.3C360.3 173.1 360.3 244 316.5 287.8C272.7 331.5 201.8 331.5 158 287.8Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M262.8 151.2C265.8 147.3 269 143.1 274.5 137.7C277.4 134.9 286.4 128.9 289.8 127.7C292.4 126.8 297.4 140.5 297.4 149C297.4 157 294.5 180.7 294.5 180.7L262.8 151.2Z"
              fill="var(--HORA--clip-nodata--lens-color)" />
            <path
              opacity="0.2"
              d="M269.2 159.4C274.9 158.6 283.1 147.8 288.5 142.3C293.9 136.8 294.5 145.3 293.6 156.2C293.1 161.6 291.9 167.9 290.2 170.9C289.6 171.9 288.1 171.9 287.4 171C283.6 166.4 276.4 161.3 269.2 159.4Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M301.5 306C299.4 307.4 297.2 308.7 295 310C273.4 322.4 248.6 327.2 224.5 324.6C203 322.3 182.1 314 164.4 299.8C169.4 291.3 173.3 284.5 175 280.6C182 264.5 185.7 262.3 186.1 248.3C186.6 234.3 180 218.2 178.3 203.9C189.7 198.5 288.1 231.1 288.1 231.1C278.6 250.6 294.4 265.7 298.1 274.6C302.7 285.1 302.7 295.6 301.5 306Z"
              fill="var(--HORA--clip-nodata--lens-color)" />
            <path
              d="M306.2 203.6C308.3 204.7 309.6 207.4 309.6 207.4C309.6 207.4 309.4 197.4 304 189.5C298.4 181.4 294.2 178.8 289.2 169.1C284 159.1 272.2 147 256 145.8C239.8 144.5 201.1 142.4 187.1 167.2C183 174.5 180.5 181.4 179.2 187.9C174.1 196.2 170.2 211.6 170.4 216.1C172.9 213 176.6 210.6 176.6 210.6C176.6 210.6 174.4 224.4 175 231.7C178.3 227.7 182 225.4 184.5 224.1C191.2 236 215.3 253.3 249.2 249.5C276.8 246.4 289.2 242.2 294.9 233.1C296.8 230.1 298.8 226.3 300.5 222.4C301.5 223.3 303.6 225.6 305.3 230C306.8 222.7 304.9 215.2 304.9 215.2C304.9 215.2 307.6 217.9 309 219.5C309.2 213 308.7 209 306.2 203.6Z"
              fill="var(--HORA--clip-nodata--lens-color)" />
            <path
              opacity="0.3"
              d="M227.7 177.7C231.4 172.9 238.8 169.2 245.3 175.3C247.4 177.3 243.9 193.5 227.7 177.7Z"
              fill="var(--HORA--clip-nodata--lens-shadow-color)" />
            <path
              opacity="0.3"
              d="M289.4 176C286.3 171.7 280.7 168.7 275.5 174.1C273.1 176.7 279.7 190.8 289.4 176Z"
              fill="var(--HORA--clip-nodata--lens-shadow-color)" />
            <path
              d="M274.1 186.3C264.9 185.9 259.9 186.1 260.7 191.2C261.4 195.4 270.9 200.2 274.2 198.4C279.2 195.6 281.9 186.6 274.1 186.3Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              opacity="0.1"
              d="M270.6 197.4C261.5 194.8 243.7 192.2 238.2 202.1C234.1 209.5 236.2 217 242.5 222.5C249.2 228.3 259.8 234 270.4 234.9C285.1 236.2 291.3 230.8 295.1 224.9C300.9 216.1 303.6 201.5 292.3 197.3C285.9 194.9 276.9 196.1 270.6 197.4Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              opacity="0.1"
              d="M295 309.9C273.4 322.3 248.6 327.1 224.5 324.5C220.5 312.8 219.7 298.5 223.4 284.3C229.7 260.1 250.4 265.6 261 271.6C268.4 268.2 278.8 264.8 286.3 270.2C294.7 276.4 296.5 293.1 295 309.9Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              opacity="0.2"
              d="M261.6 212.9C259.2 212.9 256.4 212.4 253.5 211.4C253.1 211.3 253 210.9 253.1 210.5C253.2 210.1 253.6 209.9 254 210.1C259.6 212 264.1 212 267.5 210.2C271.4 208.1 272.3 204.2 272.3 204.2C272.4 203.9 272.6 203.7 272.9 203.7C273.2 203.7 273.4 203.8 273.6 204C279.4 213.7 285.7 210.5 285.8 210.4C286.1 210.2 286.6 210.4 286.7 210.7C286.9 211 286.7 211.5 286.4 211.6C286.3 211.6 279.4 215.1 273.2 205.8C272.5 207.3 271.1 209.7 268.2 211.3C266.2 212.4 264 212.9 261.6 212.9Z"
              fill="var(--HORA--clip-nodata--lens-shadow-color)" />
            <path
              d="M211.9 151.5C205.7 149.3 200.8 145 193.8 138.2C188.5 133.1 184.3 125.8 179.5 125.4C175.8 125.1 172.7 138.2 174.8 150.8C176.4 160.6 186.8 184.8 186.8 184.8L211.9 151.5Z"
              fill="var(--HORA--clip-nodata--lens-color)" />
            <path
              opacity="0.2"
              d="M201.2 154C202.6 153.1 202.6 151.1 201.1 150.2C196 147.1 189.8 140.6 186.1 136.2C181.2 130.4 179.6 140.4 181.7 151.1C182.4 154.8 184.2 158.6 185.9 161.5C187.2 163.8 190.5 164.1 192.1 161.9C194.4 159.1 197.6 156.2 201.2 154Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M296.5 168.1L211.9 169.9C211.4 169.9 211 169.5 211 169.1C211 168.6 211.4 168.2 211.8 168.2L296.4 166.4C296.9 166.4 297.3 166.8 297.3 167.2C297.3 167.7 297 168.1 296.5 168.1Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M222.7 188L200.8 188.4L200 168.4L222 167.9L222.7 188Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              opacity="0.3"
              d="M213.7 178.2C213.7 179.5 212.7 180.5 211.4 180.5C210.1 180.5 209.1 179.5 209.1 178.2C209.1 176.9 210.1 175.9 211.4 175.9C212.7 175.9 213.7 176.9 213.7 178.2Z"
              fill="var(--HORA--clip-nodata--lens-shadow-color)" />
            <path
              opacity="0.2"
              d="M222.7 186.8L251.3 186.2C253.6 186.2 255.4 184.2 255.3 181.9L254.8 168.1L222 168.8L222.7 186.8Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              d="M180.7 188.8L200.8 188.4L200 168.4L180 168.8C178.3 168.8 176.9 170.3 177 172L177.5 185.9C177.6 187.6 179 188.9 180.7 188.8Z"
              fill="var(--HORA--clip-nodata--display-shadow-color)" />
            <path
              opacity="0.3"
              d="M180.7 188.8L200.8 188.4L200 168.4L180 168.8C178.3 168.8 176.9 170.3 177 172L177.5 185.9C177.6 187.6 179 188.9 180.7 188.8Z"
              fill="var(--HORA--clip-nodata--lens-color)" />
            <path
              d="M399.7 350.6C399.2 348.4 398.3 346.6 397.1 345.1C394.5 342.3 391.8 339.7 389 337.1C386.3 334.5 383.5 331.9 380.7 329.4C377.9 326.8 375 324.4 372.2 321.9C366.4 317 360.5 312.2 354.4 307.6C351.6 305.5 348.8 303.5 345.9 301.5C347.2 297.8 346.5 293.6 343.5 290.6L339.3 286.4C338.5 285.6 337.7 285 336.8 284.6C374.4 235.5 370.8 165 325.8 120C276.9 71.1 197.6 71.1 148.7 120C99.7999 168.9 99.7999 248.2 148.7 297.1C193.6 342 264.2 345.7 313.3 308.1C313.8 309 314.4 309.8 315.1 310.6L319.3 314.8C322.2 317.7 326.5 318.5 330.2 317.2C332.2 320.1 334.2 322.9 336.3 325.7C340.9 331.8 345.7 337.8 350.6 343.5C353.1 346.4 355.6 349.2 358.1 352C360.6 354.8 363.2 357.6 365.8 360.3C368.4 363 371 365.8 373.8 368.4C375.3 369.6 377.1 370.5 379.3 371C381.5 371.4 384.1 371.5 387.6 370.7C393.2 369.3 397.8 365 399.3 359C400.2 355.4 400.1 352.8 399.7 350.6ZM154.7 291C109.1 245.4 109.1 171.5 154.7 126C200.3 80.4 274.2 80.4 319.8 126C365.4 171.6 365.4 245.5 319.8 291C274.2 336.6 200.3 336.6 154.7 291Z"
              fill="var(--HORA--clip-nodata--lens-color)" />
            <path
              opacity="0.2"
              d="M399.7 350.6C399.2 348.4 398.3 346.6 397.1 345.1C394.5 342.3 391.8 339.7 389 337.1C386.3 334.5 383.5 331.9 380.7 329.4C377.9 326.8 375 324.4 372.2 321.9C366.4 317 360.5 312.2 354.4 307.6C351.6 305.5 348.8 303.5 345.9 301.5C347.2 297.8 346.5 293.6 343.5 290.6L339.3 286.4C338.5 285.6 337.7 285 336.8 284.6C374.4 235.5 370.8 165 325.8 120C276.9 71.1 197.6 71.1 148.7 120C99.7999 168.9 99.7999 248.2 148.7 297.1C193.6 342 264.2 345.7 313.3 308.1C313.8 309 314.4 309.8 315.1 310.6L319.3 314.8C322.2 317.7 326.5 318.5 330.2 317.2C332.2 320.1 334.2 322.9 336.3 325.7C340.9 331.8 345.7 337.8 350.6 343.5C353.1 346.4 355.6 349.2 358.1 352C360.6 354.8 363.2 357.6 365.8 360.3C368.4 363 371 365.8 373.8 368.4C375.3 369.6 377.1 370.5 379.3 371C381.5 371.4 384.1 371.5 387.6 370.7C393.2 369.3 397.8 365 399.3 359C400.2 355.4 400.1 352.8 399.7 350.6ZM154.7 291C109.1 245.4 109.1 171.5 154.7 126C200.3 80.4 274.2 80.4 319.8 126C365.4 171.6 365.4 245.5 319.8 291C274.2 336.6 200.3 336.6 154.7 291Z"
              fill="var(--HORA--clip-nodata--lens-shadow-color)" />
            <path
              opacity="0.3"
              d="M330.2 317.1L345.8 301.5C345.9 301.5 341.7 313.4 330.2 317.1Z"
              fill="var(--HORA--clip-nodata--lens-shadow-color)" />
            <path
              d="M354.3 157C352.8 153.6 351.1 150.2 349.4 147L350.3 146.5C352.1 149.8 353.8 153.2 355.3 156.6L354.3 157ZM345 139.6C340 131.8 334.2 124.6 327.7 118L328.5 117.2C335.1 123.8 341 131.1 346 138.9L345 139.6Z"
              fill="var(--HORA--clip-nodata--lens-color)" />
            <path
              opacity="0.2"
              d="M354.3 157C352.8 153.6 351.1 150.2 349.4 147L350.3 146.5C352.1 149.8 353.8 153.2 355.3 156.6L354.3 157ZM345 139.6C340 131.8 334.2 124.6 327.7 118L328.5 117.2C335.1 123.8 341 131.1 346 138.9L345 139.6Z"
              fill="var(--HORA--clip-nodata--lens-shadow-color)" />
          </svg>
          <h3 class="hora-notfound__message-title">
            We searched everywhere
          </h3>
          <p class="hora-notfound__message">
            But we couldn't find any data that match your current criterial.
          </p>
        </div>
      </div>
    </slot>
  </div>
</template>

<style>
.hora-clip--nodata {
  --HORA--clip-nodata--lens-shadow-color: var(--hr-color-indigo);
  --HORA--clip-nodata--display-shadow-color: var(--hr-color-gray-light-4);
  --HORA--clip-nodata--lens-color: var(--hr-color-blue);
  --HORA--clip-nodata--display-top-color: var(--hr-color-gray-light-5);
  --HORA--clip-nodata--display-top-all-color: var(--hr-color-gray-light-5);
  --HORA--clip-nodata--border-bottom-color: var(--hr-color-gray-light-3);
  --HORA--clip-nodata--border-bottom-all-color: var(--hr-color-gray-light-2);
  --HORA--clip-nodata--display-bottom-color: var(--hr-color-gray-light-4);
}
.dark .hora-clip--nodata {
  --HORA--clip-nodata--lens-shadow-color: var(--hr-color-indigo);
  --HORA--clip-nodata--display-shadow-color: var(--hr-color-gray-dark-1);
  --HORA--clip-nodata--lens-color: var(--hr-color-blue);
  --HORA--clip-nodata--display-top-color: var(--hr-color-gray-dark-5);
  --HORA--clip-nodata--display-top-all-color: var(--hr-color-gray-dark-4);
  --HORA--clip-nodata--border-bottom-color: var(--hr-color-gray-dark-3);
  --HORA--clip-nodata--border-bottom-all-color: var(--hr-color-gray-dark-4);
  --HORA--clip-nodata--display-bottom-color: var(--hr-color-gray-dark-2);
}
</style>
