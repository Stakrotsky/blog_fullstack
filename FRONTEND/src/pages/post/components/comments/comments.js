import PropTypes from 'prop-types';
import { useState } from 'react';
import { Comment } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentAsync } from '../../../../actions';
import { selectUserRole } from '../../../../selectors';
import { Icon } from '../../../../components';
import styled from 'styled-components';
import { PROP_TYPE, ROLE } from '../../../../constants';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (postId, content) => {
		dispatch(addCommentAsync(postId, content));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						name="comment"
						value={newComment}
						placeholder="Комментарий..."
						onChange={(e) => setNewComment(e.target.value)}
					></textarea>
					<Icon
						id="fa-paper-plane-o"
						size="18px"
						margin=" 0 0 0 10px"
						onClick={() => onNewCommentAdd(postId, newComment)}
					/>
				</div>
			)}
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						postId={postId}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 20px auto;

	& .new-comment {
		margin: 20px 0 0;
		display: flex;
		width: 100%;
	}

	& .new-comment textarea {
		width: 550px;
		resize: none;
		font-size: 18px;
		height: 120px;
	}
`;

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
	postId: PropTypes.string.isRequired,
};
