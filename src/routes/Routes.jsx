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
    "Home",
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
        parent: mainMenus[0]
    },
    {
        title: 'Approvisionnement',
        path: '/approv',
        element: <Approv />,
        parent: mainMenus[1]
    },
    {
        title: 'Ventes',
        path: '/vente',
        element: <Ventes />,
        parent: mainMenus[1]
    },
    {
        title: 'Paiements',
        path: '/paie',
        element: <Paiement />,
        parent: mainMenus[1]
    },
    {
        title: 'Caisse',
        path: '/caisse',
        element: <Caisse />,
        parent: mainMenus[1]
    },
    {
        title: 'Produits',
        path: '/produit',
        element: <Produits />,
        parent: mainMenus[2]
    },
    {
        title: 'Catégories',
        path: '/categ',
        element: <CategProd />,
        parent: mainMenus[2]
    },
    {
        title: 'Comptes',
        path: '/comptes',
        element: <Comptes />,
        parent: mainMenus[2]
    },
    {
        title: 'Types comptes',
        path: '/type-cpte',
        element: <TypeCompte />,
        parent: mainMenus[2]
    },
    {
        title: 'Stocks',
        path: '/stocks',
        element: <Stocks />,
        parent: mainMenus[3]
    },
    {
        title: 'Factures',
        path: '/factures',
        element: <Factures />,
        parent: mainMenus[3]
    },
    {
        title: 'Fournisseurs',
        path: '/fournisseurs',
        element: <Fournisseurs />,
        parent: mainMenus[4]
    },
    {
        title: 'Clients',
        path: '/clients',
        element: <Clients />,
        parent: mainMenus[4]
    },
    {
        title: 'Utilisateurs',
        path: '/clients',
        element: <Users />,
        parent: mainMenus[5]
    },
    {
        title: 'Taux de change',
        path: '/taux',
        element: <Taux />,
        parent: mainMenus[5]
    },

]