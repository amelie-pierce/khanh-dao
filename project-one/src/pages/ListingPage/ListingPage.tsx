import { FilterIcon, SearchIcon } from "@/assets/icons";
import { Filter, Pagination } from "@/components";
import { IconButton, ProductCard, Text, TextField } from "@/components/common";
import { useDrawer, useScreenSize } from "@/hooks";
import useListing from "@/hooks/useListing";
import "./ListingPage.scss";

type TOwnProps = {};

const ListingPage = (props: TOwnProps) => {
  const {} = props;
  const { products, loading } = useListing();
  const { isMobile } = useScreenSize();
  const { onTriggerDrawer } = useDrawer();

  const renderListing = () => {
    if (loading) {
      return <Text>Data is fetching...</Text>;
    }

    if (!products.length) {
      return <Text>No data available</Text>;
    }
    return products.map((d) => (
      <ProductCard key={d.id} {...d} imageSrc={d.images[0]} />
    ));
  };

  return (
    <div className="listing-page">
      {!isMobile && <Filter />}
      <div className="listing">
        <div className="listing__search__box">
          <TextField
            width={250}
            startIcon={<SearchIcon size={24} />}
            placeholder="Type here to search"
          />
          {isMobile && (
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onTriggerDrawer && onTriggerDrawer({ component: <Filter /> });
              }}
            >
              <FilterIcon size={24} />
              <Text size="text-lg" fontWeight={600}>
                Filter
              </Text>
            </IconButton>
          )}
        </div>
        <div className="listing__container">{renderListing()}</div>

        <Pagination />
      </div>
    </div>
  );
};

export default ListingPage;
