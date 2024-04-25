/* eslint-disable no-undef */
const id1 = 'rqdv5juczeskfw1e867';
const id2 = 'fnfn8mytkpmkfw1e867';
const id3 = 'ughslf146iqkfw1e867';
const id4 = 'w7jca3irwykfw1e867';

const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
    it('should return the restaurant that has been added', async () => {
        favoriteRestaurant.putRestaurant({ id: id1 });
        favoriteRestaurant.putRestaurant({ id: id2 });
        expect(await favoriteRestaurant.getRestaurant(id1)).toEqual({ id: id1 });
        expect(await favoriteRestaurant.getRestaurant(id2)).toEqual({ id: id2 });
        expect(await favoriteRestaurant.getRestaurant(id3)).toEqual(undefined);
    });

    it('should refuse a restaurant from being added if it does not have the correct properly', async () => {
        favoriteRestaurant.putRestaurant({ aProperty: 'property' });
        expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
    });

    it('can return all of the restaurants that have been added', async () => {
        favoriteRestaurant.putRestaurant({ id: id1 });
        favoriteRestaurant.putRestaurant({ id: id2 });
        expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: id2 }, { id: id1 }]);
    });

    it('should remove favorite restaurant', async () => {
        favoriteRestaurant.putRestaurant({ id: id1 });
        favoriteRestaurant.putRestaurant({ id: id2 });
        favoriteRestaurant.putRestaurant({ id: id3 });
        await favoriteRestaurant.deleteRestaurant(id1);
        expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: id2 }, { id: id3 }]);
    });

    it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
        favoriteRestaurant.putRestaurant({ id: id1 });
        favoriteRestaurant.putRestaurant({ id: id2 });
        favoriteRestaurant.putRestaurant({ id: id3 });
        await favoriteRestaurant.deleteRestaurant(id4);
        expect(await favoriteRestaurant.getAllRestaurants()).toEqual([
            { id: id2 }, { id: id1 }, { id: id3 },
        ]);
    });
};

export default itActsAsFavoriteRestaurantModel;
