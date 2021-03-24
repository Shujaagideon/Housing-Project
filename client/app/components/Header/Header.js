import React from "react";
import { Head, LogBtns } from '../../styles/header'
import { Link } from "react-router-dom";
import { CustomBtn } from "../../styles/common";
import { useGlobalState } from "../UIdata/statecontext";
import { Avatar } from "../../styles/setting";

const Header = () => {
  const { logedin } = useGlobalState();
  return (
    <>
      <Head>
        <div className="logo">
          Homes
      </div>
        <div className="side-bar">
          <Link className="link" to='/'>
            <i className="icon-basic-home"></i>
          </Link>
          <Link to='/bookmarks'>
            <i className="icon-ecommerce-sales"></i>
          </Link>
          <Link to='/specificProduct'>
            <i className="icon-basic-info"></i>
          </Link>
        </div>
        <div className="settings">
          <Link to='/settings'>
            <i className="icon-basic-gear"></i>
          </Link>
        </div>
      </Head>
      {logedin ?
      <LogBtns center>
          <Avatar small>Ahoy</Avatar>
      </LogBtns>
      :
        <LogBtns>
          <Link to='/login'>
            <CustomBtn login>
              Login
      </CustomBtn>
          </Link>

          <Link to='/signup'>
            <CustomBtn>
              Signup
      </CustomBtn>
          </Link>
        </LogBtns>
        }
      
    </>

  )
};

export default Header;
