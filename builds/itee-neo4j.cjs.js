console.log('Itee.Database.Neo4j v1.0.2 - CommonJs')
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Neo4JDriver = require('apoc');
var iteeDatabase = require('itee-database');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

var Neo4JDriver__namespace = /*#__PURE__*/_interopNamespace(Neo4JDriver);

/**
 * @author [Ahmed DCHAR]{@link https://github.com/dragoneel}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

class TNeo4JDatabase extends iteeDatabase.TAbstractDatabase {

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{},
            ...parameters,
            ...{
                driver: Neo4JDriver__namespace
            }
        };

        super( _parameters );

    }

    close ( /*onCloseCallback*/ ) {}

    connect () {

        this._driver.query( 'match (n) return n' ).exec().then(
            function ( response ) {
                this.logger.log( response );
            },
            function ( fail ) {
                this.logger.log( fail );
            }
        );

    }

    on ( /*eventName, callback*/ ) {}

    _initDatabase () {
        super._initDatabase();

    }

}

exports.TNeo4JDatabase = TNeo4JDatabase;
//# sourceMappingURL=itee-neo4j.cjs.js.map
