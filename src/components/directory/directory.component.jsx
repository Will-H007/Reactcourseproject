import CategoryItem from "../category-item/category-item.component"
import "./directory.styles.scss"
const Directory = ({categories}) => {
    return( 
        <div className='directory-container'>
      {categories.map((Category) => 
      (
        <CategoryItem key = {Category.id} category={Category}/>
      )
        
      )}
     </div>
    )
}
export default Directory