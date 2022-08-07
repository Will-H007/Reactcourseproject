import CategoryItem from "../category-item/category-item.component"
import "./directory.styles.scss"
const Directory = ({categories}) => {
    return( 
        <div className='categories-container'>
      {categories.map((Category) => 
      (
        <CategoryItem key = {Category.id} category={Category}/>
      )
        
      )}
     </div>
    )
}
export default Directory