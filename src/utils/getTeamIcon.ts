import CustomerSuccessIcon from "../assets/icons/customer.png";
import SalesIcon from "../assets/icons/sales.png";
import EngineeringIcon from "../assets/icons/engineer.png";
import MarketingIcon from "../assets/icons/marketing.png";

export const getTeamIcon = (team: string) => {
  if (team === "Customer Success") {
    return CustomerSuccessIcon;
  } else if (team === "Sales") {
    return SalesIcon;
  } else if (team === "Engineering") {
    return EngineeringIcon;
  } else if (team === "Marketing") {
    return MarketingIcon;
  } else {
    return null;
  }
};
