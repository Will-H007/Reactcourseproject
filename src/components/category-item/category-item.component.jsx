import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    const {title: title,imageUrl: imageUrl} = category;
    return (
        <div className='category-container'>

        <div className='background-image' 
       style={{ backgroundImage: `url(${imageUrl})` }}>
        
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>

        </div>

      </div>

    )
}

export default CategoryItem;