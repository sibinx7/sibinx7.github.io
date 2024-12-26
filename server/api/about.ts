import {defineEventHandler} from "h3";
import about from "../../data/info.json"

export default defineEventHandler((event) => {
	return {
		...about
	}
})