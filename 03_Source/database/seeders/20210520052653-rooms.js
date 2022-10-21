'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert('Rooms', [
            {
                name: 'CT 101',
                cinemaId: 1,
                roomTypeId: 1,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'CT 102',
                cinemaId: 1,
                roomTypeId: 1,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'CT 103',
                cinemaId: 1,
                roomTypeId: 1,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'CT 201',
                cinemaId: 1,
                roomTypeId: 2,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'CT 202',
                cinemaId: 1,
                roomTypeId: 2,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'CT 301',
                cinemaId: 1,
                roomTypeId: 3,
                row: 8,
                col: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'CT 302',
                cinemaId: 1,
                roomTypeId: 3,
                row: 8,
                col: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HCM 101',
                cinemaId: 2,
                roomTypeId: 1,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HCM 102',
                cinemaId: 2,
                roomTypeId: 1,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HCM 103',
                cinemaId: 2,
                roomTypeId: 1,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HCM 104',
                cinemaId: 2,
                roomTypeId: 1,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HCM 105',
                cinemaId: 2,
                roomTypeId: 1,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HCM 201',
                cinemaId: 2,
                roomTypeId: 2,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HCM 202',
                cinemaId: 2,
                roomTypeId: 2,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HCM 203',
                cinemaId: 2,
                roomTypeId: 2,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HCM 301',
                cinemaId: 2,
                roomTypeId: 3,
                row: 8,
                col: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HCM 302',
                cinemaId: 2,
                roomTypeId: 3,
                row: 8,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'VT 101',
                cinemaId: 3,
                roomTypeId: 1,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'VT 102',
                cinemaId: 3,
                roomTypeId: 1,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'VT 103',
                cinemaId: 3,
                roomTypeId: 1,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'VT 104',
                cinemaId: 3,
                roomTypeId: 1,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'VT 201',
                cinemaId: 3,
                roomTypeId: 2,
                row: 8,
                col: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'DN 101',
                cinemaId: 4,
                roomTypeId: 1,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'DN 102',
                cinemaId: 4,
                roomTypeId: 1,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'DN 103',
                cinemaId: 4,
                roomTypeId: 1,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'DN 104',
                cinemaId: 4,
                roomTypeId: 1,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'DN 201',
                cinemaId: 4,
                roomTypeId: 2,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'DN 202',
                cinemaId: 4,
                roomTypeId: 2,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'DN 203',
                cinemaId: 4,
                roomTypeId: 2,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'DN 301',
                cinemaId: 4,
                roomTypeId: 3,
                row: 8,
                col: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'DN 302',
                cinemaId: 4,
                roomTypeId: 3,
                row: 8,
                col: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'KH 101',
                cinemaId: 5,
                roomTypeId: 1,
                row: 10,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'KH 102',
                cinemaId: 5,
                roomTypeId: 1,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'KH 103',
                cinemaId: 5,
                roomTypeId: 1,
                row: 10,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'KH 201',
                cinemaId: 5,
                roomTypeId: 2,
                row: 8,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'KH 202',
                cinemaId: 5,
                roomTypeId: 2,
                row: 8,
                col: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HN 101',
                cinemaId: 6,
                roomTypeId: 1,
                row: 16,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HN 102',
                cinemaId: 6,
                roomTypeId: 1,
                row: 16,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HN 103',
                cinemaId: 6,
                roomTypeId: 1,
                row: 16,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HN 104',
                cinemaId: 6,
                roomTypeId: 1,
                row: 16,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HN 201',
                cinemaId: 6,
                roomTypeId: 2,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HN 202',
                cinemaId: 6,
                roomTypeId: 2,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HN 203',
                cinemaId: 6,
                roomTypeId: 2,
                row: 12,
                col: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HN 301',
                cinemaId: 6,
                roomTypeId: 3,
                row: 8,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HN 302',
                cinemaId: 6,
                roomTypeId: 3,
                row: 8,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'HN 303',
                cinemaId: 6,
                roomTypeId: 3,
                row: 8,
                col: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('Rooms', null, {});
    },
};
