/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var PI = require( '@stdlib/constants-float64-pi' );
var abs2 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof abs2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the squared absolute value of a number', function test( t ) {
	t.strictEqual( abs2( -2.0 ), 4.0, 'returns expected value' );
	t.strictEqual( abs2( 3.0 ), 9.0, 'returns expected value' );
	t.strictEqual( abs2( 0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( abs2( -PI ), PI*PI, 'returns expected value' );
	t.end();
});

tape( 'the function computes the squared absolute value of negative zero', function test( t ) {
	t.strictEqual( isPositiveZero( abs2( -0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes the squared absolute value of infinity', function test( t ) {
	t.strictEqual( abs2( PINF ), PINF, 'returns expected value' );
	t.strictEqual( abs2( NINF ), PINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = abs2( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});
