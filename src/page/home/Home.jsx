import { ColumnContainer } from "../../components/ColumnContainer"
import { FeedContent } from "./components/FeedContent"
import "../../styles/pages/Home.css"

export const HomePage = () => {
	return(
		<ColumnContainer widths={["50%", "50%"]}>
			<div className="feed-container">
				<FeedContent />
			</div>
			<div  style={{color: "white"}}>
				<h1>Ensayo</h1>
				<div>Ensayito</div>
			</div>
		</ColumnContainer>
	)
}