import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { userIsLogin } from "../../redux/action-creators/login";

import ProductsContainer from "../containers/ProductsContainer";
import Navbar from "../containers/NavbarContainer";
import RegisterContainer from "../containers/RegisterContainer";
import ViewSingleContainer from "../containers/ViewSingleContainer";
import Home from "../containers/Home";
import CarritoContainer from "../containers/CarritoContainer";
import ProductSearchContainer from "../containers/ProductSearchContainer";
import LoginContainer from "../containers/LoginContainer";
import CateogryContainer from "../containers/CategoryContainer";
import PerfilUsuarioContainer from "../containers/PerfilUsuarioContainer";
import EditPerfil from "../containers/ContainerEditPerfil";
import ProductsSearchByPriceContainer from "../containers/ProductsSearchByPriceContainer";
import ProductsSearchByAlfabetContainer from "../containers/ProductsSearchByAlfabetContainer";
import UserListaContainer from "../containers/UserListaContainer";
import CompraContainer from "../containers/CompraContainer";
import AddProductoContainer from "../containers/AddProductoContainer";
import AdminContainer from "../containers/AdminContainer";
import EditProductContainer from "../containers/EditProductContainer";
import EditProductFormContainer from "../containers/EditProductFormContainer";
import CategoriesAdminContainer from "../containers/CategoriesAdminContainer";
import FormPasswordContainer from "../containers/FormPasswordContainer";
import RatingContainer from "../containers/RatingContainer";
import AddCategoriesContainer from "../containers/AddCategoriesContainer";
import EditCategoryContainer from "../containers/EditCategoryContainer";

const Main = ({ user, userLogin }) => {
  useEffect(() => {
    userLogin();
  }, []);

  return (
    <React.Fragment>
      <Navbar user={user} />

      <Switch>
        <Route exact path="/home" component={Home} />

        <Route
          exact
          path="/products/page/:page"
          component={ProductsContainer}
        />

        <Route exact path="/products/:id" component={ViewSingleContainer} />

        <Route
          exact
          path="/products/filter/alfabet/:alfabet/:page"
          component={ProductsSearchByAlfabetContainer}
        />

        <Route
          exact
          path="/products/filter/price/:price/:page"
          component={ProductsSearchByPriceContainer}
        />

        <Route
          exact
          path="/products/categories/:id"
          component={CateogryContainer}
        />

        <Route exact path="/login" component={LoginContainer} />

        <Route exact path="/register" component={RegisterContainer} />

        <Route exact path="/miPerfil" component={PerfilUsuarioContainer} />

        <Route exact path="/editPerfil" component={EditPerfil} />

        <Route exact path="/userList" component={UserListaContainer} />

        <Route exact path="/carrito" component={CarritoContainer} />

        <Route
          exact
          path="/products/product/:name"
          component={ProductSearchContainer}
        />

        <Route exact path="/miPerfil/compras" component={CompraContainer} />

        <Route
          exact
          path="/miPerfil/compras/:compraId/valorar/:productoId"
          component={RatingContainer}
        />

        <Route
          exact
          path="/admin/addProduct"
          component={AddProductoContainer}
        />

        <Route exact path="/admin" component={AdminContainer} />

        <Route
          exact
          path="/admin/editProduct"
          component={EditProductContainer}
        />

        <Route exact path="/posta/:id" component={EditProductFormContainer} />

        <Route
          exact
          path="/admin/listCategories"
          component={CategoriesAdminContainer}
        />

        <Route
          exact
          path="/admin/addCategory"
          component={AddCategoriesContainer}
        />

        <Route
          exact
          path="/admin/editCategory/:id"
          component={EditCategoryContainer}
        />

        <Redirect from="/" to="/home" />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.login.userLogueado
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userLogin: () => dispatch(userIsLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
