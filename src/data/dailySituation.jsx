import { RiCurrencyFill } from "react-icons/ri";
import { GiTakeMyMoney, GiPayMoney, GiMoneyStack } from "react-icons/gi";

export const dailySituationData = [
    {
        title: "Recettes ventes",
        amount: "358",
        lastOperation: "45",
        hour: "14:09 PM",
        icon: <GiMoneyStack />
    },
    {
        title: "Autres recettes",
        amount: "742",
        lastOperation: "100",
        hour: "11:09 AM",
        icon: <RiCurrencyFill />
    },
    {
        title: "Dépenses",
        amount: "187",
        lastOperation: "45",
        hour: "15:37 PM",
        icon: <GiPayMoney />
    },
    {
        title: "Solde",
        amount: "675",
        lastOperation: "-",
        hour: "16:09 PM",
        icon: <GiTakeMyMoney />
    },
]