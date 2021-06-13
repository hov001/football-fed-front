import "../tourTable/table.css";
import Navigation from "@nav/nav.js";
import tourTableTeamData from "@data/tourTableTeamData";

const table = `
<div class="table">
    <div class="tourn__tbl__title">Հայաստանի Պրեմիեր Լիգա</div>            
    <div class="tourn__tbl__cont">
        <table>
            <tbody>
                
                <tr>
                    <th class="team__tytle">№</th>
                    <th colspan="2" style="text-align: left;" class="team__tytle">Թիմեր</th>
                    <th class="team__tytle">Խ</th>
                    <th class="team__tytle">Մ</th>
                </tr>
                ${new Navigation().renderTourTabledataItem(tourTableTeamData)}
            </tbody>
        </table>
        <div class="fin__div">
            <a class="fin__a">ԱԿՈՒՄԲՆԵՐ</a>
        </div>
    </div>
</div>

`;

export default table;
