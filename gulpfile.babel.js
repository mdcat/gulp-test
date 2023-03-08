import {src, dest} from 'gulp';
import babel from 'gulp-babel';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import path from 'path';

const sass = gulpSass(dartSass);

function test(done) {
    console.log('ok');
    done();
}

function scssCompiler() {
    return src('./**/scss/*.scss')
        .pipe(sass())
        .pipe(rename(_path => {
            _path.dirname = path.join(path.dirname(_path.dirname), 'css')
        }))
        .pipe(dest('./'))
}

exports.default = scssCompiler;