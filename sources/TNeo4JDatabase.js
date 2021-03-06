/**
 * @author [Ahmed DCHAR]{@link https://github.com/dragoneel}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import * as Neo4JDriver      from 'apoc'
import { TAbstractDatabase } from 'itee-database'

class TNeo4JDatabase extends TAbstractDatabase {

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{},
            ...parameters,
            ...{
                driver: Neo4JDriver
            }
        }

        super( _parameters )

    }

    close ( /*onCloseCallback*/ ) {}

    connect () {

        this._driver.query( 'match (n) return n' ).exec().then(
            function ( response ) {
                this.logger.log( response )
            },
            function ( fail ) {
                this.logger.log( fail )
            }
        )

    }

    on ( /*eventName, callback*/ ) {}

    _initDatabase () {
        super._initDatabase()

    }

}

export { TNeo4JDatabase }
