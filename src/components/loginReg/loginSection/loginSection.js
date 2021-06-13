import "./loginSection.css";

const loginSection = `
<div class="globall__log">
    <div class="title__log">
        <span class="title__text__log">ՄՈՒՏՔ ԳՈՐԾԵԼ</span>
    </div>
    <div class="sing__log">
        <div>
            <label for="mail"  class= "all__blok lable">էԼ․Փոստ*</label>
            <input type="text" id="mail"  class= "all__blok input">
        </div>
        <div>
            <label for="password" class= "all__blok lable">Գաղտնաբառ*</label>
            <input type="password" id="password" class= "all__blok input">
        </div>
        <div>
            <button class= "all__blok button button1">ՄՈՒՏՔ ԳՈՐԾԵԼ</button>
            <button class= "all__blok button button2">ԳՐԱՆՑՎԵԼ</button>
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

export default loginSection