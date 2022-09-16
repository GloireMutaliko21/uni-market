import { MdSpaceDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { AiFillAccountBook, AiTwotoneAccountBook } from "react-icons/ai";
import { RiStockFill, } from "react-icons/ri";
import { BsCurrencyExchange, } from "react-icons/bs";
import { FcCustomerSupport, } from "react-icons/fc";
import {
    FaShopify, FaShoppingCart, FaMoneyBillAlt, FaBox,
    FaLayerGroup, FaFileInvoiceDollar, FaPersonBooth,
    FaUserTie,
} from "react-icons/fa";


import Approv from '../pages/Approv';
import Caisse from '../pages/Caisse';
import CategProd from '../pages/CategProd';
import Comptes from '../pages/Comptes';
import Dashboard from '../pages/Dashboard';
import Paiement from '../pages/Paiement';
import Produits from '../pages/Produits';
import Ventes from '../pages/Ventes';
import TypeCompte from '../pages/TypeCompte';
import Stocks from '../pages/Stocks';
import Factures from '../pages/Factures';
import Fournisseurs from '../pages/Fournisseurs';
import Clients from '../pages/Clients';
import Taux from '../pages/Taux';
import Users from '../pages/Users';


export const mainMenus = [
    "Accueil",
    "Opérations",
    "Comptabilité",
    "Visualisation",
    "Partenaires",
    "Configuration",
]

export const routesData = [
    {
        title: 'Dashoboard',
        path: '/',
        element: <Dashboard />,
        parent: mainMenus[0],
        icon: <MdSpaceDashboard />
    },
    {
        title: 'Approvisionnement',
        path: '/approv',
        element: <Approv />,
        parent: mainMenus[1],
        icon: <FaShopify />
    },
    {
        title: 'Ventes',
        path: '/vente',
        element: <Ventes />,
        parent: mainMenus[1],
        icon: <FaShoppingCart />
    },
    {
        title: 'Paiements',
        path: '/paie',
        element: <Paiement />,
        parent: mainMenus[1],
        icon: <FaMoneyBillAlt />
    },
    {
        title: 'Caisse',
        path: '/caisse',
        element: <Caisse />,
        parent: mainMenus[1],
        icon: <FaBox />
    },
    {
        title: 'Produits',
        path: '/produit',
        element: <Produits />,
        parent: mainMenus[2],
        icon: <MdProductionQuantityLimits />
    },
    {
        title: 'Catégories',
        path: '/categ',
        element: <CategProd />,
        parent: mainMenus[2],
        icon: <FaLayerGroup />
    },
    {
        title: 'Comptes',
        path: '/comptes',
        element: <Comptes />,
        parent: mainMenus[2],
        icon: <AiFillAccountBook />
    },
    {
        title: 'Types comptes',
        path: '/type-cpte',
        element: <TypeCompte />,
        parent: mainMenus[2],
        icon: <AiTwotoneAccountBook />
    },
    {
        title: 'Stocks',
        path: '/stocks',
        element: <Stocks />,
        parent: mainMenus[3],
        icon: <RiStockFill />
    },
    {
        title: 'Factures',
        path: '/factures',
        element: <Factures />,
        parent: mainMenus[3],
        icon: <FaFileInvoiceDollar />
    },
    {
        title: 'Fournisseurs',
        path: '/fournisseurs',
        element: <Fournisseurs />,
        parent: mainMenus[4],
        icon: <FaPersonBooth />
    },
    {
        title: 'Clients',
        path: '/clients',
        element: <Clients />,
        parent: mainMenus[4],
        icon: <FcCustomerSupport />
    },
    {
        title: 'Utilisateurs',
        path: '/clients',
        element: <Users />,
        parent: mainMenus[5],
        icon: <FaUserTie />
    },
    {
        title: 'Taux de change',
        path: '/taux',
        element: <Taux />,
        parent: mainMenus[5],
        icon: <BsCurrencyExchange />
    },

]