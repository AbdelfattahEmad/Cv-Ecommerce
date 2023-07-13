import SideBar from '@admin/components/sidebar/side-bar';
import { Outlet } from 'react-router-dom';
import React from 'react'

export default function Index() {
  return (
    <div className="admin-container">
        <aside className='sidebar'>
            <SideBar name="mohamed" />
        </aside>
        <div className="admin-content">
            <div className="topbar">
                topbar
            </div>
            <Outlet />
        </div>
    </div>
  )
}
