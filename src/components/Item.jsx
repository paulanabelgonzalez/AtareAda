import { useContext } from "react";

import {
	Box,
	IconButton,
	Stack,
	styled,
	Tooltip,
	tooltipClasses,
	Typography,
} from "@mui/material";

import { FaCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbPointFilled } from "react-icons/tb";

import { TaskContext } from "../context/TaskContext";

const createStyledTooltip = (bgColor) =>
	styled(({ className, ...props }) => (
		<Tooltip {...props} classes={{ popper: className }} />
	))(({ theme }) => ({
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: bgColor,
			color: "white",
			boxShadow: theme.shadows[1],
			fontSize: 11,
		},
	}));

const CheckTooltip = createStyledTooltip("#4caf50");
const CheckedTooltip = createStyledTooltip("#d32f2f");
const EditTooltip = createStyledTooltip("#3434ff");
const DeleteTooltip = createStyledTooltip("#d32f2f");
const DescriptionTooltip = createStyledTooltip("grey");

export const Item = ({ task }) => {
	const { handleDeleteTask, handleTaskCompleted, handleEditClick } =
		useContext(TaskContext);

	return (
		<>
			<Box
				as="li"
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "10px",
				}}
			>
				<Typography sx={{ display: "flex", alignItems: "center" }}>
					<span style={{ display: "flex" }}>
						<TbPointFilled style={{ fontSize: "1.5rem", color: "#9b3522" }} />
					</span>
					<span
						className={`task-text ${task.completed ? "completed" : ""}`}
						style={{ marginInlineStart: "15px", color: "#615e5e" }}
					>
						{task.task}
					</span>
				</Typography>

				<Stack direction="row" spacing={{ xs: 0, md: 2 }}>
					<CheckTooltip title="Marcar como realizada">
						<IconButton
							onClick={() => handleTaskCompleted(task.id)}
							sx={{ color: "#4caf50" }}
						>
							<FaCheck style={{ fontSize: "20px" }} />
						</IconButton>
					</CheckTooltip>

					<EditTooltip title="Editar">
						<IconButton
							onClick={() => handleEditClick(task.id)}
							sx={{ color: "#3434ff" }}
						>
							<FaRegEdit style={{ fontSize: "20px" }} />
						</IconButton>
					</EditTooltip>

					<DeleteTooltip title="Eliminar">
						<IconButton color="error" onClick={() => handleDeleteTask(task.id)}>
							<RiDeleteBin6Line style={{ fontSize: "20px" }} />
						</IconButton>
					</DeleteTooltip>
				</Stack>
			</Box>
		</>
	);
};