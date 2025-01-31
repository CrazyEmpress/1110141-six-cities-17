import { Link } from 'react-router-dom';
import { convertRatingToStars, getOfferLink } from '../../utils';
import { CompactOffer } from '../../types/offers';
import BookmarkButton from '../bookmark-button/bookmark-button';

type FavoritesOfferProps = {
  offer: CompactOffer;
}

function FavoritesOffer({ offer }: FavoritesOfferProps) {
  return (
    <article className="favorites__card place-card">
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={getOfferLink(offer.id)}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">
              /&nbsp;night
            </span>
          </div>
          <BookmarkButton offer={offer} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${convertRatingToStars(offer.rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getOfferLink(offer.id)}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoritesOffer;
