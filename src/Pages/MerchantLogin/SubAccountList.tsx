import React, { Component } from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import { withStyles, CircularProgress } from '@material-ui/core'
import { detailStyle } from '../../Styles/jss/detailsPageStyle'
import compose from 'recompose/compose'
import { withRouter, Link, Redirect } from 'react-router-dom'
import { getDataAction } from '../../Store/Actions/restListAction'
import { imgBase } from '../../Constants/DishCoApi'
import { ISubAccount} from '../../Models/MerchantListModel'

import {GetRestaurantLoginDetails_Api} from '../../Constants/DishCoApi'
class SubAccountList extends React.Component<any, any> {

  componentWillMount() {      
    let IntLocFlag = 1;
    let IntLocCustomerId = 8;
    const query = {
        IntLocFlag,IntLocCustomerId
    }
    const type = 'GETSUBACCOUNTLIST';
    return this.props.getList(GetRestaurantLoginDetails_Api, query, type);
  }
  render() {
    const { classes, match, subAccountList, history } = this.props;
    const { isError, isLoading, data } = subAccountList;
    const logoPlaceholder = '/assets/images/other/img/for_you.png';
    if(isLoading || data == null ) {
      return (<div className="preLoader">
        <CircularProgress color="primary" />
      </div>)
    }
    else { 
        let AccountId = match.params.merchantId; 
        
      const accountList:ISubAccount[] = data.filter((obj:any) => obj.AccountId == AccountId );
      if (accountList.length > 0) {
      return (
          <div className="listType-1">
            <div className="bg-mute p-3 text-center font-weight-bold">
              Select Restraunt
            </div>
            {accountList.map((list:any, i:number)=> {
              return (

            <Link key ={i} to={ match.url + "/" + list.RestaurantId} className="listItem">
            <div className="img-box" >
                <img src={list.RestaurantLogo ==""? logoPlaceholder : imgBase + list.RestaurantLogo} alt="account logo" ></img>
            </div>
            <div className="data-container" >
                <h5> {list.RestaurantName} </h5>
                <small className='text-danger' >
                    {'@' + list.Location}
                </small>
            </div>
        </Link>
              )
            }
            
             )}
            <div className="bg-mute p-3 text-center font-weight-bold mob-footer" onClick={()=> history.goBack() } >
              Back
            </div>
          </div>
         )
        }
        else {  alert('err'); return (<Redirect to="/merchants" ></Redirect>) }
    }
    
  }
}

function mapStateToProps(state: any, ownProps: any) {
  return {
    subAccountList: state.SubAccountListReducer
  }
}
function mapDispatchToProps(dispatch: any, ownProps: any) {

  return {
    getList: (url:any,query: any, type: any) => dispatch(getDataAction(url, query, type))
  }
}

export default compose(
  withRouter,
  withStyles(detailStyle),
  connect(mapStateToProps, mapDispatchToProps),
)(SubAccountList);