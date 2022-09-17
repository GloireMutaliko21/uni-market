import {
    MdSpaceDashboard, MdProductionQuantityLimits,
    MdSell, MdAccountBalanceWallet
} from "react-icons/md";
import { HiDocumentDuplicate, HiCog } from "react-icons/hi";
import { AiFillAccountBook, AiTwotoneAccountBook, AiFillHome } from "react-icons/ai";
import { RiStockFill, } from "react-icons/ri";
import { BsCurrencyExchange, } from "react-icons/bs";
import { FcCustomerSupport, } from "react-icons/fc";
import {
    FaShopify, FaShoppingCart, FaMoneyBillAlt, FaBox,
    FaLayerGroup, FaFileInvoiceDollar, FaPersonBooth,
    FaUserTie, FaUserSecret
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
    { name: "Accueil", icon: <AiFillHome /> },
    { name: "Opérations", icon: <MdSell /> },
    { name: "Comptabilité", icon: <MdAccountBalanceWallet /> },
    { name: "Visualisation", icon: <HiDocumentDuplicate /> },
    { name: "Partenaires", icon: <FaUserSecret /> },
    { name: "Configuration", icon: <HiCog /> },
]

export const routesData = [
    {
        title: 'Dashoboard',
        path: '/',
        element: <Dashboard />,
        parent: mainMenus[0].name,
        icon: <MdSpaceDashboard />
    },
    {
        title: 'Approvisionnement',
        path: '/approv',
        element: <Approv />,
        parent: mainMenus[1].name,
        icon: <FaShopify />
    },
    {
        title: 'Ventes',
        path: '/vente',
        element: <Ventes />,
        parent: mainMenus[1].name,
        icon: <FaShoppingCart />
    },
    {
        title: 'Paiements',
        path: '/paie',
        element: <Paiement />,
        parent: mainMenus[1].name,
        icon: <FaMoneyBillAlt />
    },
    {
        title: 'Caisse',
        path: '/caisse',
        element: <Caisse />,
        parent: mainMenus[1].name,
        icon: <FaBox />
    },
    {
        title: 'Produits',
        path: '/produit',
        element: <Produits />,
        parent: mainMenus[2].name,
        icon: <MdProductionQuantityLimits />
    },
    {
        title: 'Catégories',
        path: '/categ',
        element: <CategProd />,
        parent: mainMenus[2].name,
        icon: <FaLayerGroup />
    },
    {
        title: 'Comptes',
        path: '/comptes',
        element: <Comptes />,
        parent: mainMenus[2].name,
        icon: <AiFillAccountBook />
    },
    {
        title: 'Types comptes',
        path: '/type-cpte',
        element: <TypeCompte />,
        parent: mainMenus[2].name,
        icon: <AiTwotoneAccountBook />
    },
    {
        title: 'Stocks',
        path: '/stocks',
        element: <Stocks />,
        parent: mainMenus[3].name,
        icon: <RiStockFill />
    },
    {
        title: 'Factures',
        path: '/factures',
        element: <Factures />,
        parent: mainMenus[3].name,
        icon: <FaFileInvoiceDollar />
    },
    {
        title: 'Fournisseurs',
        path: '/fournisseurs',
        element: <Fournisseurs />,
        parent: mainMenus[4].name,
        icon: <FaPersonBooth />
    },
    {
        title: 'Clients',
        path: '/clients',
        element: <Clients />,
        parent: mainMenus[4].name,
        icon: <FcCustomerSupport />
    },
    {
        title: 'Utilisateurs',
        path: '/users',
        element: <Users />,
        parent: mainMenus[5].name,
        icon: <FaUserTie />
    },
    {
        title: 'Taux de change',
        path: '/taux',
        element: <Taux />,
        parent: mainMenus[5].name,
        icon: <BsCurrencyExchange />
    },

]