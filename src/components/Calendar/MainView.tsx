import React from 'react'
import ScheduleHistory from './ScheduleHistory'
import Today from './Today'

const MainView : React.FC = () => {
  return (
    <>

        <div className='container'>

            {/* <h2 className='text-center'>Digital RecipeBook</h2> */}
            <h2 className='text-center'>Calendar Main View</h2>
            <div>
                {/* {ScheduleHistory( props:{})} */}
                {/* <ScheduleHistory></ScheduleHistory> */}
                <Today></Today>
                <div className="row">
                    <div className="col col-sm">
                        {/* <button className='btn btn-primary mb-2' onClick={addNewRecipe}>Add Recipe</button>    This button should expand all */}
                    </div>
                    <div className="col searchInputs">
                        {/* <input type="text" id="myInput" onChange={searchTable} placeholder="Keyword Search..." value={searchInput}/> */}
                        <br/>
                    </div>
                        
                    <div className="col"><br/></div>
                
                    <div className="col col-sm d-flex justify-content-end">
                        {/* <RecipeNameSearchBar placeholder="Enter a Recipe Name" data={recipes}/>   */}
                        {/* <button className='btn btn-primary mb-2' onClick={gotoIndex}>Index</button> */}
                    </div>
                </div>
            </div>
        </div>



    </>





  )
}

export default MainView