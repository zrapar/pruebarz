@extends('common.app')

@section('meta-css')
@include('admin.metacss')
@endsection

@section('contenido')
<div class="wrapper">
    @include('admin.sidebar')
    <div class="container">
        @if(!$bad)
        @include('admin.dt')
        @else
        @include('admin.dt2')
        @endif
    </div>
</div>
@endsection

@section('meta-js')
@include('admin.metajs')
@endsection