import React from 'react';


export default function LayoutWrapper({ children, title }){
return (
<div className="container-dashboard">
<header style={{ marginBottom: 16 }}>
<h1>{title || 'Portfolio Dashboard'}</h1>
</header>
<main>{children}</main>
</div>
)
}