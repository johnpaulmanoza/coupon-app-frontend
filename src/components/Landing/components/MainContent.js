import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const cardData = [
  {
    img: 'https://sih.booky.ph/eyJrZXkiOiJibG9nXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDE2XC8xMVwvMDUxMDE3NTlcL0dlbGF0by1NYW5pbGEtQ3JlYW1lcnkuanBnIiwiYnVja2V0IjoiYm9va3lyZXBvcnQifQ==',
    tag: 'Restaurant',
    title: '2 Days Only: 50% OFF on Manila Creamery’s Gelatos!',
    description:
      'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
    locations: [{ name: 'Quezon City' }],
  },
  {
    img: 'https://sih.booky.ph/eyJrZXkiOiJibG9nXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDIzXC8xMVwvMTkxNjE5MThcL29uZS13b3JsZC1kZWxpLWNvdmVyLWRlbGktc2FsZS5qcGciLCJidWNrZXQiOiJib29reXJlcG9ydCJ9',
    tag: 'Restaurant',
    title: 'Enjoy Up to 50% Off at One World Deli’s Big Deli Sale',
    description:
      'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
    locations: [{ name: 'Quezon City' }],
  },
  {
    img: 'https://sih.booky.ph/eyJrZXkiOiJibG9nXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDE5XC8wMVwvMjkxNTQ3NTJcL0ppbmctTW9uaXMtU2Fsb24tRmVhdHVyZWQtSW1hZ2UxLmpwZyIsImJ1Y2tldCI6ImJvb2t5cmVwb3J0In0=',
    tag: 'Service',
    title: "50% OFF for Deep Repair Treatments and more at Jing Monis Salon",
    description:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
    locations: [{ name: 'Metro Manila' }, { name: 'Quezon City' }],
  },
  {
    img: 'https://sih.booky.ph/eyJrZXkiOiJibG9nXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDIwXC8wM1wvMDkxMzIwMzNcL1NjcmVlbi1TaG90LTIwMjAtMDMtMDktYXQtMS4yMC4wOS1QTS5wbmciLCJidWNrZXQiOiJib29reXJlcG9ydCJ9',
    tag: 'Restaurant',
    title: 'You Can Get These Japanese Soufflé Pancakes For 50% Off!',
    description:
      'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
    locations: [{ name: 'BGC' }, { name: 'Metro Manila' }],
  }
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

function Location({ locations, date }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <Typography variant="caption">
          {locations.map((location) => location.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">{date}</Typography>
    </Box>
  );
}

Location.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
          Discover deals that you'll love
        </Typography>
        <Typography>
          Browse deals from over 31,000 restaurants and groceries.
        </Typography>
      </div>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <Search />
        {/* <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton> */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          gap: 4,
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'row',
            gap: 3,
            overflow: 'auto',
          }}
        >
          <Chip onClick={handleClick} size="medium" label="All categories" />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Restaurants"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Groceries"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Services"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto',
          }}
        >
          <Search />
          {/* <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton> */}
        </Box>
      </Box>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 4 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[0].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[0].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                {cardData[0].title}
              </Typography>
              {/* <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[0].description}
              </StyledTypography> */}
            </SyledCardContent>
            <Location locations={cardData[0].locations} />
          </SyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(1)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 1 ? 'Mui-focused' : ''}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[1].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[1].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                {cardData[1].title}
              </Typography>
              {/* <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[1].description}
              </StyledTypography> */}
            </SyledCardContent>
            <Location locations={cardData[1].locations} />
          </SyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(2)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
            sx={{ height: '100%' }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[2].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
              style={{ height: 270 }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[2].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                {cardData[2].title}
              </Typography>
              {/* <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[2].description}
              </StyledTypography> */}
            </SyledCardContent>
            <Location locations={cardData[2].locations} />
          </SyledCard>
        </Grid>
      </Grid>
    </Box>
  );
}