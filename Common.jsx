import React from 'react'
import { NavLink } from 'react-router-dom';


const Common =(props) => {
   return (
     <><div>
     
      <section id="header" className="" >
      <div className="container-fluid ">
      <div className='row'>
          <div className="col-10 mx-auto">
           
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
         <center> <p> 
            {props.name}
             <strong className="bramd-name">
             Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this  an item of real property, buildings or housing in general.

Real estate is different from personal property, which is not permanently attached to the land, such as vehicles, boats, jewelry, furniture, tools and the rolling stock of a farm.

 
 </strong>
          </p> </center>
         
          <h5 className="my-3">
          major categories:

Apartment :   An individual unit in a multi-unit building. The boundaries of the apartment are generally defined by a perimeter of locked or lockable doors. Often seen in multi-story apartment buildings.
Multi-family house : Often seen in multi-story detached buildings, where each floor is a separate apartment or unit.
Terraced house :  A number of single or multi-unit buildings in a continuous row with shared walls and no intervening space.
Condominium :   A building or complex, similar to apartments, owned by individuals. Common grounds and common areas within the complex are owned and shared jointly. In North America, there are townhouse or rowhouse style condominiums as well. The British equivalent is a block of flats.
Cooperative : A type of multiple ownership in which the residents of a multi-unit housing complex own shares in the cooperative corporation that owns the property, giving each resident the right to occupy a specific apartment or unit.
Semi-detached dwellings
Duplex : Two units with one shared wall.
Detached dwellings :
Detached house or single-family detached house
Portable dwellings :
Mobile homes or residential caravans : A full-time residence that can be (although might not in practice be) movable on wheels.
Houseboats : A floating home
Tents : Usually temporary, with roof and walls consisting only of fabric-like material.
</h5>
          <div classNamemt="my-3">
           <button><NavLink  to={props.visit} className="btn-get-started" to="/sinup"> 
              For MORE DETAILS 
            </NavLink></button> 
          </div>
        </div>
       </div>
       </div>
       <div className="col-lg-6 order-1 or order-lg-2 header-img">
        </div>
       </div>
      </section>
     </div>
     </>
   )
}

export default Common;
