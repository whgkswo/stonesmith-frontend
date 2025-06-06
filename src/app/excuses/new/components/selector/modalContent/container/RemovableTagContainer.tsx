import RemovableTag from "@/app/excuses/new/components/selector/modalContent/container/tag/RemovableTag";
import TagInterface from "@/app/excuses/new/components/TagInterface";
import {useTagSelector} from "@/app/excuses/new/components/useTagSelector";
export default function RemovableTagContainer({ tagSelector, emptyLabel, hideBorder = false, hideBackground = false }: {
    tagSelector: ReturnType<typeof useTagSelector>,
    emptyLabel?: string,
    hideBorder?: boolean,
    hideBackground?: boolean,
}){

    const { selectedTags, isTagsLoading } = tagSelector;

    const parseTagKey = (tagKey: string): TagInterface => {
        const [category, value] = tagKey.split(':');
        return { category, value };
    };

    const getTags = () => {
        const label = isTagsLoading ? '태그 불러오는 중...' : emptyLabel || '태그 없음';
        const tagArray = Array.from(selectedTags.values());

        return (
            <>
                {!selectedTags || selectedTags?.size === 0 ?
                    <span className={'w-full text-[var(--placeholder-color)] text-center'}>{label}</span> : null}
                {tagArray?.map((key, index) => (
                    <RemovableTag
                        key={index}
                        tagInterface={parseTagKey(key)}
                        tagSelector={tagSelector}
                    ></RemovableTag>
                ))}
            </>
        )
    }

    const getBorder = () => {
        return hideBorder ? '' : 'border-2 border-[var(--purple-grey)]';
    }

    const getBackground = () => {
        return hideBackground ? '' : 'bg-[var(--purple-grey-highlighted)]';
    }

    return (
        <div className={`global_tag_container w-full ${getBorder()} ${getBackground()}`}>
            {getTags()}
        </div>
    );
}
