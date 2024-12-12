import useAxiosInstance from "@hooks/useAxiosInstance";
import CommentListItem from "@pages/board/CommentListItem";
import CommentNew from "@pages/board/CommentNew";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

CommentList.propTypes = {
  data: PropTypes.array,
};
export default function CommentList({ data=[] }) {

  const list = data.map(item => <CommentListItem key={item._id} item={ item } />);

  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 { list.length }개</h4>

      { list }

      <CommentNew />

    </section>
  );
}