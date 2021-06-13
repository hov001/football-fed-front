import "@loginReg/loginSection/loginSection.css";
import "./regSection.css";


const regSection = `
<div class="globall__log">
    <div class="title__log">
        <span class="title__text__log">ԳՐԱՆՑՈՒՄ</span>
    </div>
    <div class="sing__log">
        <div>
            <label for="name"  class= "all__blok lable">Անուն*</label>
            <input type="text" id="name"  class= "all__blok input">
        </div>
        <div>
            <label for="surname" class= "all__blok lable">Ազգանուն*</label>
            <input type="text" id="surname" class= "all__blok input">
        </div>
        <div>
            <label for="data" class= "all__blok lable">Ծննդյան Ամսաթիվ*</label>
            <div class= "big__data">
                <input type="number" id="data" class= "all__blok input inp__data">
                <select class= "all__blok input inp__data">
                    <option value="jan">Հունվար</option>
                    <option value="feb">Փետրվար</option>
                    <option value="mar">Մարտ</option>
                    <option value="apr">Ապրիլ</option>
                    <option value="may">Մայիս</option>
                    <option value="jun">Հունիս</option>
                    <option value="jul">Հուլիս</option>
                    <option value="aug">Օգոստոս</option>
                    <option value="sep">Սեպտեմբեր</option>
                    <option value="oct">Հոկտեմբեր</option>
                    <option value="nov">Նոյեմբեր</option>
                    <option value="dec">Դեկտեմբեր</option>
                </select>
                <input type="number" id="data" class= "all__blok input inp__data">
            </div>
        </div>
        <span class= "all__blok lable">Սեռ</span>
        <div>
            <input type="radio" name="gender" value="men" class= "radio1">
            <label for="men" class= "radio">Արական</label>
            <input type="radio" name="gender" value="wumen" class= "radio2">
            <label for="wumen" class= "radio">Իգական</label>
            
        </div>
        <div>
            <label for="mail"  class= "all__blok lable">էԼ․Փոստ*</label>
            <input type="text" id="mail"  class= "all__blok input">
        </div>
        <div>
            <label for="fon" class= "all__blok lable">Հեռախոսահամար*</label>
            <input type="number" id="fon" class= "all__blok input">
        </div>
        <div>
            <label for="password" class= "all__blok lable">Գաղտնաբառ*</label>
            <input type="password" id="password" class= "all__blok input">
        </div>
        <div>
            <label for="password" class= "all__blok lable">Կրկնել Գաղտնաբառը*</label>
            <input type="password" id="password" class= "all__blok input">
        </div>
        <div>
            <button class= "all__blok button button1">ԳՐԱՆՑՎԵԼ</button>
            <button class= "all__blok button button2">ՄՈՒՏՔ ԳՈՐԾԵԼ</button>
        </div>
        <div class= "soc__set">
            <span class= "soc">Մուտք Սոցկայքերով՝</span>
            
                <i class="fab fa-vk icon"></i>
                <i class="fab fa-facebook-f icon"></i>
                <i class="fab fa-google icon icon3"></i>
             
        </div>
    </div>
</div>
`

export default regSection