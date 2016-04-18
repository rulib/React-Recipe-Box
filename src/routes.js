import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Box from './pages/Box';
import List from './pages/List';
import Edit from './pages/Edit';
import Recipe from './pages/Recipe';
import MainPage from './pages/MainPage';
const addRec = MainPage.addRecipe;

const routes = (
	<Route component = { MainPage }>
		<Route path="/" component={ Box }>
			<IndexRoute component={ List } />
			<Route path="edit" addRecipe="foo" component={ Edit } />
			<Route path="view" component={ Recipe } />
		</Route>
	</Route>
);

export default routes;
