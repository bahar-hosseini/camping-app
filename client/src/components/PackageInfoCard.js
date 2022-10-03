import TentIcon from "../assets/tent.svg";
import BagIcon from "../assets/bag.svg";
import LanternIcon from "../assets/lantern.svg";
import CookingIcon from "../assets/cooking.svg";

export function PackageInfoCard(props) {
  // this component renders info about the package as a table
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <img src={TentIcon} alt="tent" width="50px"></img>
          </td>
          <td>{props.tent}</td>
        </tr>
        <tr>
          <td>
            <img src={BagIcon} alt="sleeping_bag" width="50px"></img>
          </td>
          <td width="300px">{props.bags}</td>
        </tr>
        <tr>
          <td>
            <img src={LanternIcon} alt="lantern" width="50px"></img>
          </td>
          <td>{props.lantern}</td>
        </tr>
        <tr>
          <td>
            <img src={CookingIcon} alt="cooking" width="50px"></img>
          </td>
          <td>{props.cooking}</td>
        </tr>
      </tbody>
    </table>
  );
}
