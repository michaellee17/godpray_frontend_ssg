<template>
    <div class="bg-red-800">
        <div class="px-11px py-30px flex flex-col gap-10px items-center">
            <div>
                <ul class="flex max-md:gap-3 gap-1 flex-wrap justify-center">
                    <li>
                        <router-link to="/about/" class="text-white whitespace-nowrap">關於我們 |</router-link>
                    </li>
                    <li>
                        <router-link to="/terms/" class="text-white whitespace-nowrap">會員服務條款 |</router-link>
                    </li>
                    <li>
                        <router-link to="/process/" class="text-white whitespace-nowrap">點燈流程 |</router-link>
                    </li>
                    <li>
                        <router-link to="/privacy/" class="text-white whitespace-nowrap">隱私權政策 |</router-link>
                    </li>
                    <li>
                        <router-link to="/customerService/" class="text-white whitespace-nowrap">線上客服</router-link>
                    </li>
                </ul>
            </div>
            <div class="max-md:text-center">
                <p class="md:whitespace-nowrap text-white">客服電話：<a href="tel:0912345678">0912-345-678</a> Service：<a href="mailto:example@gmail.com">@XXXX.com.tw</a> </p>
            </div>
            <div class="flex  justify-center">
                <div class="yt"></div>
                <div class="fb"></div>
                <div class="ig"></div>
                <div class="line"></div>
            </div>
            <div>
                <p class="whitespace-nowrap text-white">神界祈福平台Ⓒ2023 All Rights Reserved</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
a:hover{
    color:#ceb96e;
}
.yt{
    height: 33px;
    width: 65px;
    background-image: url(../../assets/footer/yt.svg);
    background-repeat: no-repeat;
}
.yt:hover{
    background-image: url(../../assets/footer/yt2.svg);
}
.fb{
    height: 33px;
    width: 50px;
    background-image: url(../../assets/footer/fb.svg);
    background-repeat: no-repeat;
}
.fb:hover{
    background-image: url(../../assets/footer/fb2.svg);
}
.ig{
    height: 33px;
    width: 50px;
    background-image: url(../../assets/footer/ig.svg);
    background-repeat: no-repeat;
}
.ig:hover{
    background-image: url(../../assets/footer/ig2.svg);
}
.line{
    height: 33px;
    width: 50px;
    background-image: url(../../assets/footer/line.svg);
    background-repeat: no-repeat;
}
.line:hover{
    background-image: url(../../assets/footer/line2.svg);
}
</style>
