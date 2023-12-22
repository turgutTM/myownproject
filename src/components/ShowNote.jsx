import React from "react";
import "../css/shownote.css";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const ShowNote = ({ showNote, setShowNote }) => {
	return (
		<AnimatePresence>
			{showNote && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={`shownote-container`}
				>
					<div className="shownote-content">
						<div className="close-btn-container">
							<button
								type="button"
								className="close-btn"
								onClick={() => setShowNote(false)}
							>
								<IoCloseSharp size={25} />
							</button>
						</div>
						<input />
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ShowNote;
