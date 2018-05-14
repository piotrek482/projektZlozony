const CartButton = ({course, className = "btn btn-block", icon, label}) => {
	let in_cart = AppState.state.cart_map[course.id];
	let onClick= ()=>(
		in_cart? actions.removeFromCart(course.id) : actions.addToCart(course.id)
	) 

	return (in_cart? 
		<Button className={className + " btn-danger"} onClick={onClick} icon={icon || "remove"} label={label || "Usuń z obserwowanych"} /> :
		<Button className={className + " btn-success"} onClick={onClick}  label={label || "Dodaj do obserowwanych"} />
	)
}

const CartDetails = (props) => (
	<div className="course_details text-center">
		<h1 className="thumbnail">{props.data.categories} </h1>
		<CartButton course={props.data} />
	</div>
)

const ShoppingCartList = ({list}) =>(
	<div>
		<h1> Koszyk </h1>
		<hr />
		<div>
			{list.map((data) => <Course data={data} key={data.id} Details={CartDetails}>
				<div className="btn-group pull-right">
					<Button label="Szczegóły postu" />
					<Button label="Przenieś do przeczytanych" icon="star"/>
				</div>
				<div><b>Autor: </b> {data.author} <br/> <b>Czas trwania: </b> {data.duration} </div>
			</Course>)}
		</div>
	</div>
)