<template>
    <div class="login">
        <h4 class="title">註冊會員</h4>
        <div class="w-full flex flex-col mt-20px gap-20px input_section">
            <div v-if="errorMessage" class="flex justify-center">
                <h5 class="error">{{ errorMessage }}</h5>
            </div>
            <div>
                <h5 class="mb-5px sub_title">電子郵件<span class="required">*</span></h5>
                <input v-model="email" class="member_input" type="text" placeholder="請輸入電子郵件">
            </div>
            <div>
                <h5 class="mb-5px sub_title">密碼<span class="required">*</span></h5>
                <div class="relative">
                    <input v-model="password" class="member_input" :type="isPswViewed ? 'text' : 'password'"
                        placeholder="請輸入密碼">
                    <img v-show="!isPswViewed" class="eye" src="../../assets/modal/eyes_icon_2.svg" alt=""
                        @click="isPswViewed = !isPswViewed">
                    <img v-show="isPswViewed" class="eye" src="../../assets/modal/eyes_icon.svg" alt=""
                        @click="isPswViewed = !isPswViewed">
                </div>
            </div>
        </div>
        <textarea class="w-full mb-10px custom_textarea" cols="30" rows="5" readonly>
會員服務條款
第 1 條 定義 服務條款 
一、認知及同意條款
（一）神界祈福平台（www.XXXXXX.com，以下簡稱「本網站」）係依據本使用條款提供服務（以下簡稱「本服務」）予會員。當您使用會員帳號至「本網站」購物時，視為您已閱讀、瞭解及同意本使用條款之所有內容。
（二）若本會員條款內容有修正或變更之處，「本網站」會寄發電子郵件通知您，並請您隨時注意。若您於本會員條款修改或變更過後仍為使用本服務，亦視為您已閱讀、瞭解及同意該修改或變更。
（三）若您未滿二十歲，應於您的法定代理人閱讀、瞭解及同意本會員條款或其後修改及變更之內容，方得註冊為會員或使用本服務。當您開始使用本服務時，視為您的法定代理人已閱讀、瞭解及同意本會員條款或其修改、變更後之內容。
二、會員註冊及帳戶安全
（一）您應於申請加入「本網站」之會員時，提供您本人正確之資料（包括但不限於姓名、出生年月日、電子郵件信箱、通訊地址等），若個人資料有更新之必要，也請您配合更新來獲取最佳之服務。若您提供任何錯誤、不實之資料、未即時更新資料、漏未提供本網站所需之必要資料、侵害他人姓名權、人格權或智慧財產權或違反其他法律規定時，「本網站」得逕行停止或終止您於「本網站」之帳號，並拒絕您使用本服務之全部或一部份。
（二）您登入帳戶後所有使用本服務之行為，皆視為您本人之行為，包括但不限於瀏覽、檢索、查詢、交易、線上刷卡、更新個人資料、參與優惠活動及其他攸關帳戶個人權益之行為等。
（三）您的帳號、密碼及會員權益均專屬您個人使用及享有，請勿轉借、轉讓他人或與他人共用，若有違反者，「本網站」得逕行停止或終止您於「本網站」之帳號，並拒絕您使用本服務之全部或一部份。
（四）若因可歸責於您之事由而洩漏個人資料或相關帳戶資訊，令第三人有機會使用者，您須對第三人所為負完全責任，概與「本網站」無涉。
（五）您充分知悉並瞭解「本網站」公告之優惠，須您詳實填載個人資料及連絡方式，若您漏為填載或填載失真，您將喪失享有優惠之資格。
（六）您的帳號或密碼有遭人盜用或其他任何帳戶之安全問題發生時，您應立即通知「本網站」。
（七）手機號碼經與帳戶綁定使用後，非有帳戶或手機盜用、冒用等帳戶安全問題或其他正當理由，不得解除綁定。
三、個人資料保護
（一）關於您的註冊及其他個人資料依「本網站」之【隱私權政策暨個資聲明】保護。
（二）完整內容請詳參隱私權政策
四、智慧財產權保護
（一）您充分知悉並瞭解「本網站」上各類內容，包括但不限於著作、圖檔、音訊、網頁設計、攝影著作等，均由「本網站」及其他權利人享有智慧財產權，且受智慧財產權相關法律所保護。除經權利人事前以書面授權外，您不得有使用、修改、散布、進行還原、反向組譯、解編或任何違反著作權規定之行為。
（二）您充分知悉並瞭解不得將前項所稱之內容用於包括但不限於轉讓、贈與、出租、出借、再授權等目的，或從事任何法律禁止之行為。
（三）如有違反前兩項約定者，「本網站」得永久拒絕提供服務或撤銷您會員資格，並請求因此所受之損害，包括但不限於商譽損失、因訴訟所支出費用、律師費或第三人請求之損害賠償等。
五、使用者之合規承諾
您承諾絕對遵守中華民國相關法規及一切使用網際網路之國際範例，若您係中華民國境外之使用者，亦承諾遵守您所屬國家或地域之所有法令。您並承諾絕不利用本服務從事任何非法行為，並遵守本網站之相關使用條款，否則「本網站」除得停止您的帳戶使用外，亦可請求您賠償因此所受之損害，包括但不限於下列各種情形：
（一）冒用他人名義或盜取他人帳戶使用本服務。
（二）同一會員（相同姓名、電話、電子郵件等條件），重複註冊帳戶使用本服務。
（三）近365天內「逾期未提貨」訂單數累計超過3次。
（四）近365天內「取消訂單」訂單數，累計合計超過12次。
（五）多次超量訂購商品者。
（六）經常性非因商品瑕疵因素退貨者。
（七）公布或散播任何誹謗、侮辱、具威脅性、猥褻、垃圾信件、連鎖信或其他不法之文字、圖片或任何形式的檔案。
（八）從事未經「本網站」授權之商業行為，或散播未經許可之多 層次傳銷訊息或廣告等。
（九）對本服務其他用戶或第三人有任何騷擾、誹謗、侮辱或任何違反一般網路禮節致生反感之行為。
（十）使用任何設備、軟體或程序，干擾、試圖干擾「本網站」之正常運作功能或其他用戶之使用。
（十一）違反本會員條款約定或法定之保密義務。
（十二）侵害「本網站」或他人之隱私權、人格權、名譽權、營業秘密權、商標權、著作權、專利權等權利。
（十三）藉由「本網站」規定以外的方式，以本服務之使用權兌換現金、財物或其他經濟利益的行為。
（十四）盜用「本網站」之資料庫內容。
（十五）其他「本網站」判斷不正當之行為。
六、活動變更之通知方式
「本網站」得依實際執行情形，增加、修改或終止相關活動，並有權選擇最適當之方式通知會員。
七、電子報與商品訊息
「本網站」得定期發送電子報、商品訊息、優惠活動、網站訊息修正等資訊至您的電子郵件信箱。您可選擇拒絕前揭資訊之發送，當您至客服信箱提出申請後，「本網站」將予停止發送。
八、本使用條款任一約定之效力
您同意本會員條款之任何約定若遭司法機關宣告無效，不影響其餘約定之效力。
九、準據法與管轄法院
會員條款之解釋與適用，以及因本會員條款所涉及之爭議，您同意應以中華民國法律作為準據法，並以臺灣臺北地方法院為第一審管轄法院。

----------------------------------------------------------
隱私權政策
非常歡迎您光臨，為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
一、隱私權保護政策的適用範圍
隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
二、個人資料的蒐集、處理及利用方式
當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。
本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。
於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。
為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。
三、資料之保護
本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，如有違反保密義務者，將會受到相關的法律處分。
如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。
四、網站對外的相關連結
本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網 站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
五、與第三人共用個人資料之政策
本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。
前項但書之情形包括不限於：
經由您書面同意。
法律明文規定。
為免除您生命、身體、自由或財產上之危險。
與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。
當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。
有利於您的權益。
本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。
六、Cookie之使用
為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行 。
七、隱私權保護政策之修正
本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。
        </textarea>
        <div class="flex items-start mb-20px">
            <input v-model="accept" type="checkbox" class="mt-5px" @keyup.enter="sendRegister">
            <span class="required">*</span>
            <p>勾選即表示您已閱讀並同意我們的 <router-link to="/privacy" @click="emit('close-modal')">隱私權政策</router-link>及 <router-link to="/terms" @click="emit('close-modal')">會員服務條款</router-link></p>
        </div>
        <button class="register_btn" @click="sendRegister">註冊</button>
    </div>
</template>
<script setup>
//官方套件
import { ref } from 'vue';
import axios from "axios";

//自製元件
import {useAuth} from '@/store/auth.js'


//格式驗證
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8;
};

//執行註冊
const email = ref('');
const password = ref('');
const accept = ref(false)
const errorMessage = ref('');
const emit = defineEmits(['redirect-register-success','close-modal']);
const sendRegister = async () => {
    if (!validateEmail(email.value)) {
        errorMessage.value = '請輸入有效電子郵件';
        return;
    }

    if (!validatePassword(password.value)) {
        errorMessage.value = '密碼至長度至少八位';
        return;
    }

    if(accept.value === false){
        errorMessage.value = '請先勾選同意條款'
        return;
    }

    try {
        const requestData = {
            email: email.value,
            password: password.value
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}/api/gc/register`,
            requestData
        );
        if(response.data.success === false){
            errorMessage.value = response.data.data
        }else{
            const jwt = response.data.data.jwt
            const auth = useAuth()
            auth.setJWT(jwt)
            auth.setMember(response.data.data)
            emit('redirect-register-success')
        }
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
}

const isPswViewed = ref(false)
</script>
<style scoped>
.custom_textarea{
    font-size: 14px;
    background-color: #ffffff;
}
a{
    color:#920000;
}
a:hover{
    color:#CEB96E;
}
.error{
    color:red;
}
.required{
    color:red;
    margin-left: 3px;
}
.sub_title {
    font-size: 16px;
}

.eye {
    position: absolute;
    right: 7px;
    top: 7px;
    width: 29px;
    height: 16px;
}

.register_btn {
    width: 100%;
    height: 40px;
    color: #ffffff;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}

.register_btn:hover {
    color: #CEB96E;
    background-color: #ffffff;
    border: 1px solid #CEB96E;
}

.close {
    width: 10px;
    height: 10px;
}

.input_section {
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 20px;
}

.member_input {
    padding: 0 10px;
    height: 30px;
    width: 100%;
    background-color: #EEEEEE;
}

.title {
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.2em;
    text-align: center;
    color: #000000;
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 10px;
}</style>