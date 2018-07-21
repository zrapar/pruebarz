@extends('common.app')

@section('meta-css')
@include('admin.metacss')
@endsection

@section('contenido')
<div class="wrapper">
    @include('admin.sidebar')
    <div class="container">
        @include('admin.dt')
    </div>
</div>
@endsection

@section('meta-js')
@include('admin.metajs')
@endsection