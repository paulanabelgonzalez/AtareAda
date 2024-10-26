import { Box } from "@mui/material";

import { Form } from "../components/Form";
import { List } from "../components/List";

export const Main = () => {
	return (
		<Box
			as="main"
			sx={{ background: "linear-gradient(to bottom, #ffe0dd , white)" }}
		>
			<Form />
			<List />
		</Box>
	);
};