import React from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import {
  IconButton,
  Flex,
  Typography
} from '@strapi/design-system';
import PrevIcon from "@strapi/icons/ChevronLeft";
import NextIcon from "@strapi/icons/ChevronRight";
import getPrevNext, { PrevNext } from "../../api/getPrevNext";

const PrevNextButton = () => {
  const { layout, isSingleType, isCreatingEntry } = useCMEditViewDataManager();
  const { id } = useParams<{ id: string }>();
  const {
    push,
    location: { pathname },
  } = useHistory();
  const { search } = useLocation();
  const [prevNext, setPrevNext] = React.useState<PrevNext | null>(null);

  React.useEffect(() => {
    const fetchNextItemId = async () => {
      try {
        const res = await getPrevNext(layout.uid, id)
        setPrevNext(res)
      } catch (error) {
        console.error("Error fetching item ID:", error);
      }
    };

    if (!isSingleType || !isCreatingEntry) {
      fetchNextItemId();
    }
  }, [id, layout.uid, isSingleType]);

  const onPrev = () => {
    const prevItemPath = `${layout.uid}/${prevNext?.prev?.id}`
    const prevPathname = pathname.replace(`${layout.uid}/${id}`, prevItemPath)
    push({
      pathname: prevPathname,
      state: { from: pathname },
      search: search,
    });
  }

  const onNext = () => {
    const nextItemPath = `${layout.uid}/${prevNext?.next?.id}`
    const nextPathname = pathname.replace(`${layout.uid}/${id}`, nextItemPath);
    push({
      pathname: nextPathname,
      state: { from: pathname },
      search: search,
    });
  }

  if (isSingleType || isCreatingEntry || !prevNext) return null;
  return (
    <Flex
      background="neutral100"
      justifyContent="space-between"
    >
      <IconButton
        disabled={!prevNext.prev}
        onClick={onPrev}
        label={prevNext.prev?.name}
        icon={<PrevIcon />}
      />
      <Typography>prev / next</Typography>
      <IconButton
        disabled={!prevNext.next}
        onClick={onNext}
        label={prevNext.next?.name}
        icon={<NextIcon />}
      />
    </Flex>
  );
};

export default PrevNextButton;
