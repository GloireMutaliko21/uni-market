import { BiDollarCircle, BiLineChart } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";

export const cardsCharts = [
    {
        title: "Chiffre d'ffaires",
        amount: '1,000.25',
        icon: <BiDollarCircle />,
        chartColor: 'rgb(0 150 136)'
    },
    {
        title: 'Dépenses',
        amount: '853.75',
        icon: <BiLineChart />,
        chartColor: 'rgb(229 115 115)'
    },
    {
        title: 'Gains bruts',
        amount: '146.25',
        icon: <GiMoneyStack />,
        chartColor: 'rgb(0 172 193)'
    },
]